import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Login = () => {
    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    return (
        <View style={styles.container}>
      <View>

      </View>
      <View style={styles.inputView}>
          <TextInput style={styles.inputStyle} placeholder="username" onChangeText={text => onChangeUsername(text)} value={username}/>
          <TextInput style={styles.inputStyle} secureTextEntry placeholder="password" onChangeText={text => onChangePassword(text)} value={password}/>
      </View>
      <View style={styles.buttonView}>
          <Button title="login" onPress={() => alert("try to login")}/>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputView: {
        width: "75%"
    },
    inputStyle: {
        height: 40,
        borderColor: "grey",
        borderWidth: 1,
        marginTop: 10,   
    },
    buttonView: {
        top: 10,
        width: "50%"
    }
  });
  

  export default Login;