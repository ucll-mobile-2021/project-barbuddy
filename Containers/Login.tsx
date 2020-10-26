import React from 'react';
import {StyleSheet, Text, Image } from 'react-native';
import { Container, Content, Form, Header, Input, Item, Button } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppScreens, AuthStackParamList } from '../AuthFlowScreen';

type LoginScreenNavigationProps = StackNavigationProp<AuthStackParamList,AppScreens.Login>
interface LoginScreenProps {
    navigation: LoginScreenNavigationProps
}

const Login: React.FunctionComponent<LoginScreenProps> = (props) => {
    const {navigation} = props;
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <Container>
            <Header />
            <Content contentContainerStyle={styles.container}>
                <Image style={styles.logo} source={require("../assets/BarBuddyLogo.png")}/>
                <Form style={styles.form}>
                    <Item style={styles.Input} rounded>
                        <Input placeholder="Username" onChangeText={e => setUsername(e)}/>
                    </Item>
                    <Item style={styles.Input} rounded>
                        <Input secureTextEntry placeholder="Password" onChangeText={e => setPassword(e)} />
                    </Item>
                    <Button style={styles.SignInButton} full rounded success
                    onPress={() => TryLogin(username,password, navigation)}>
                        <Text>Sign in</Text>
                    </Button>
                    <Button full rounded danger style={styles.RegisterButton} onPress={() => navigation.navigate(AppScreens.Register)}>
                        <Text>Register</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
}

const TryLogin = (username: string, password: string, navigation: StackNavigationProp<AuthStackParamList, AppScreens.Login>) => {
    if(username === "admin" && password === "admin")
    {
        console.log("Logged in");
        navigation.navigate("HomePage", {username});
    }
    else
    {
        console.log("Bad try");
    }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
        bottom: 30,
        width: 300,
        height: 300
    },
    form: {
        top: 10
    },
    Input: {
        margin: "2.5%",
        width: "80%"
    },
    SignInButton: {
        top: 30
    },
    RegisterButton: {
        top: 50,
        width: "60%",
        alignSelf: "center"
    }
  });
  

  export default Login;