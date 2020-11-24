import React, {useEffect} from 'react';
import {StyleSheet, Image} from "react-native";
import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { Body, Button, Container, Content, DatePicker, Form, Header, Input, Item, Left, Right, Text, Title, View } from 'native-base';
import { AppScreens, AuthStackParamList } from '../AuthFlowScreen';
import {getData, storeData} from "../Database";


type RegisterScreenNavigationProps = StackNavigationProp<AuthStackParamList,AppScreens.Register>
interface RegisterScreenProps {
    navigation: RegisterScreenNavigationProps
}

const Register: React.FunctionComponent<RegisterScreenProps> = (props) => {
     useEffect(() => {
         const LoadFonts = async () => {
            await Font.loadAsync({
                'Roboto': require('native-base/Fonts/Roboto.ttf'),
                'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
                ...Ionicons.font,
              });
         }
         LoadFonts().then(() => setLoaded(true));
    },[]);
    const {navigation} = props;
    const [isLoaded, setLoaded] = React.useState(false);
    const [Username, setUsername] = React.useState("");
    const [Firstname, setFirstname] = React.useState("");
    const [date, setDate] = React.useState(new Date());
    const [Password, setPassword] = React.useState("");
    const [repeatPassword, setRepeatPassword] = React.useState("");
    
    if(isLoaded)
    {
        return (
            <Container>
                <Header/>
                <Content contentContainerStyle={styles.Content}>
                    <Image style={styles.Logo} source={require("../assets/BarBuddyLogo.png")}/>
                    <Text style={{fontSize: 30}}>Register</Text>
                    <View style={styles.FormView}>
                      <Text style={{fontSize: 10, marginLeft: 20}}>Please fill in all of the fields</Text>
                      <Form>
                          <Item rounded style={styles.Input} >
                              <Input placeholder="Username" onChangeText={e => setUsername(e)}/>
                          </Item>
                          <Item rounded style={styles.Input} >
                              <Input placeholder="First name" onChangeText={e => setFirstname(e)}/>
                          </Item>
                          <DatePicker
                          defaultDate={new Date()}
                          maximumDate={new Date()}
                          locale={"en"}
                          timeZoneOffsetInMinutes={undefined}
                          placeHolderText="Birth date"
                          androidMode={"spinner"}
                          onDateChange={e => setDate(e)} />
                          <Item rounded style={styles.Input} >
                              <Input secureTextEntry placeholder="Password" onChangeText={e => setPassword(e)}/>
                          </Item>
                          <Item rounded style={styles.Input} >
                              <Input secureTextEntry placeholder="Confirm Password" onChangeText={e => setRepeatPassword(e)}/>
                          </Item>
                      </Form>
                      <Button full rounded success style={{ top: 20, width: "80%", alignSelf: "center"}} onPress={() => TryRegister(Username, Firstname, Password, repeatPassword, date, navigation)}><Text>Register</Text></Button>
                    </View>
                </Content>
            </Container>
        );
    }
    else
    {
        return null;
    }
}

const TryRegister = (username: string, firstname: string, password: string, repeatPassword: string, date: Date, navigation: StackNavigationProp<AuthStackParamList, AppScreens.Register>) =>
{
    if(username.length === 0 || firstname.length === 0 || password.length === 0 || repeatPassword.length === 0)
    {
        console.log("Not all fields are filled");
    }
    else
    {
        if(password !== repeatPassword)
        {
            console.log("Passwords do not match");
        }
        else
        {
            getData("users").then(users => {
                let AllUsers;
                if(users === "")
                {
                    AllUsers = [];
                }
                else
                {
                    AllUsers = JSON.parse(users);
                }
                let result = {
                    Username: username,
                    Firstname: firstname,
                    Password: password,
                    Date: date
                };
                AllUsers.push(result);
                storeData("users",JSON.stringify(AllUsers)).then(() => navigation.navigate("Login"));
                console.log("Registered succesfully!");
            });
            
        }
    }
}

const styles = StyleSheet.create({
    Content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    FormView: {
        marginTop: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    Input: {
        width: "70%",
        marginTop: 10
    },
    Button: {
        top: 20,
        width: "70&"
    },
    Logo: {
        bottom: 30,
        width: 300,
        height: 300
    }
});

export default Register;