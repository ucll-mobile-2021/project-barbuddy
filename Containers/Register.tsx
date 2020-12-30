import React, {useEffect} from 'react';
import {StyleSheet, Image} from "react-native";
import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Container, Content, Form, Header, Input, Item, Text, Toast, View } from 'native-base';
import { AppScreens, AuthStackParamList } from '../AuthFlowScreen';
import {getData, storeData} from "../Database";
import * as Haptics from 'expo-haptics';
import { ScrollView } from 'react-native-gesture-handler';

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
    const [Lastname, setLastname] = React.useState("");
    const [Password, setPassword] = React.useState("");
    const [repeatPassword, setRepeatPassword] = React.useState("");
    
    if(isLoaded)
    {
        return (
            <Container>
      
                <Content contentContainerStyle={styles.Content}>   
                
                <Image style={styles.photo} source={require("../assets/BarBuddyLogoWhiteBack-removebg.png")} />
                 <Text style={styles.textInput}>Please fill in all of the fields</Text>
                    
                    <View style={styles.FormView}>
                      
                      <Form>
                      
                          <Item style={styles.Input} >
                              <Input style={styles.textInput} placeholder="Username" onChangeText={e => setUsername(e)}/>
                          </Item>
                          <Item style={styles.Input} >
                              <Input style={styles.textInput} placeholder="First name" onChangeText={e => setFirstname(e)}/>
                          </Item>
                          <Item style={styles.Input} >
                              <Input style={styles.textInput} placeholder="Last name" onChangeText={e => setLastname(e)}/>
                          </Item>
                          <Item style={styles.Input} >
                              <Input style={styles.textInput} secureTextEntry placeholder="Password" onChangeText={e => setPassword(e)}/>
                          </Item>
                          <Item style={styles.Input} >
                              <Input style={styles.textInput} secureTextEntry placeholder="Confirm Password" onChangeText={e => setRepeatPassword(e)}/>
                          </Item>
                         
                          
                      </Form>
                      <Button full rounded success style={{ top: 20, width: "80%", alignSelf: "center"}} onPress={() => TryRegister(Username, Firstname, Lastname, Password, repeatPassword, navigation)}><Text>Register</Text></Button>
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

const TryRegister = (username: string, firstname: string, lastname: string, password: string, repeatPassword: string, navigation: StackNavigationProp<AuthStackParamList, AppScreens.Register>) =>
{
    if(username.length === 0 || firstname.length === 0 || password.length === 0 || repeatPassword.length === 0)
    {
       Toast.show({
           text: "Not all fields are filled",
           type: "danger"
       });
       Haptics.impactAsync();
    }
    else
    {
        if(password !== repeatPassword)
        {
            Toast.show({
                text: "Passwords do not match",
                type: "danger"
            });
            Haptics.impactAsync();
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
                let id = AllUsers[AllUsers.length - 1].id + 2;
                let result = {
                    id: id,
                    Username: username,
                    Firstname: firstname,
                    Lastname: lastname,
                    Password: password,
                    ProfilePic: "https://i.ibb.co/z7xPnft/Peter.png",
                    Bars: [],
                    Friends: [],
                    Visiting: null
                };
                AllUsers.push(result);
                storeData("users",JSON.stringify(AllUsers)).then(() => navigation.navigate("Login"));
                Toast.show({
                    text: "Registered successfully",
                    type: "success"
                });
                Haptics.selectionAsync();
            });
            
        }
    }
}

const styles = StyleSheet.create({
    Content: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: '#181818'// dark background colour 
    },
    FormView: {
        marginTop: 10,
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    Input: {
        width: "70%",
        marginTop: 10
    },
    Title: {
        fontSize:45,
        color: '#FFC229', //yellow
        fontWeight:'600',
    },
    Button: {
        top: 20,
        width: "70&"
    },
    photo:{
        width: 200,
        height: 200,
        marginBottom:10,
    },
    textInput:{
        color: "white",
    },
});

export default Register;