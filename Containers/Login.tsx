import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { Container, Content, Form, Header, Input, Item, Button, View } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import AuthFlowNavigator, { AppScreens, AuthStackParamList } from '../AuthFlowScreen';
import { getData, storeData } from '../Database';
import { color } from 'react-native-reanimated';
import { withTheme } from 'react-native-elements';

type LoginScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Login>
interface LoginScreenProps {
    navigation: LoginScreenNavigationProps
}

const Login: React.FunctionComponent<LoginScreenProps> = (props) => {
    const { navigation } = props;
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <View style={styles.container} >

            <View style={styles.content}>

                <View style={styles.logo}>
                    <Image style={styles.photo} source={require("../assets/BarBuddyLogoWhiteBack-removebg.png")} />

                </View>
                <View style={styles.inputfields}>
                    <Form >
                        <Item >
                            <Input  style={styles.textInput} placeholder="Username"  onChangeText={e => setUsername(e)} />
                        </Item>
                        <Item >
                            <Input style={styles.textInput} placeholder="Password" onChangeText={e => setPassword(e)} />
                        </Item>

                    </Form>
                </View>

                {/* buttons */}
                <View style={styles.buttonView}>
                    <Button style={styles.buttons} onPress={() => TryLogin(username, password, navigation)}>
                        <Text style={styles.text} >Sign in</Text>
                    </Button>

                    {/* just leave this :) */}
                    <Text></Text>

                    <Button style={styles.buttons} onPress={() => navigation.navigate(AppScreens.Register)}>
                        <Text style={styles.text} >Register</Text>
                    </Button>
                </View>



            </View>


        </View>
    );
}

const TryLogin = (username: string, password: string, navigation: StackNavigationProp<AuthStackParamList, AppScreens.Login>) => {
    getData("users").then(users => {
        if (users === "") {
            console.log("Not found");
        }
        let result = JSON.parse(users);
        let foundUser = result.find((temp: { Username: string; Password: string; }) => temp.Username === username && temp.Password === password);
        if (foundUser === undefined) {
            console.log("Not found");
        }
        else {
            console.log(foundUser);
            storeData("current", JSON.stringify(foundUser)).then(() => {
                navigation.navigate("HomePage");
            });
        }
    });
}

const styles = StyleSheet.create({
    container: {


        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: '#181818',// dark background colour
    },

    content: {

        backgroundColor: '#181818',// dark background colour

    },
    photo:{
        
    },

    logo: {
        
        alignItems: "center",
        paddingBottom: "15%",
    },
    buttonView: {
       paddingTop: "10%",

    },
    buttons: {
        
        alignSelf: "center",
        width: "40%",
        backgroundColor: "#FFC229", //yellow 
        borderRadius: 5,
    },

    inputfields: {
        alignSelf: "center",
        width: "90%",
    },
    textInput:{
        color: "white",
    },
    text: {
        color: "black",
        alignSelf: "center"
    },

});


export default Login;