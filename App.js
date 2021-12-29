import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity, Button, Alert, StyleSheet, Text, View, Linking, TextInput, Image,Platform ,KeyboardAvoidingView} from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [] = useFonts({
    JosefinSans_Bold: require('./assets/fonts/JosefinSans-Bold.ttf'),
    Ubuntu_Bold:require('./assets/fonts/Ubuntu-Bold.ttf'),
    Ubuntu_Regular:require('./assets/fonts/Ubuntu-Regular.ttf'),
  });
  
  // if (!loaded) {
  //   return null;
  // };
  const [textUsername, onChangeText] = React.useState("");
  const [textPassword, onChangeText2] = React.useState("");
  const createAlert = () =>
    Alert.alert(
      "Thông Báo",
      "UserName : " + textUsername + "\n" + "Password :" + textPassword,
      [
        {
          text: 'OK',
          onPress: () => console.log("OK pressed"),
          style: "ok"
        },
      ], {
      cancelable: false
    }
    );
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
  >

      <Text style={styles.title}>Sign In</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.inputUsername}
          onChangeText={onChangeText}
          value={textUsername}

          placeholder="Username"
        />
        <TextInput
          style={styles.inputPassword}
          onChangeText={onChangeText2}
          value={textPassword}
          placeholder="Password"
          secureTextEntry ={true}
        />


        <Text
          style={styles.text1}>Forgot <Text style={{ color: '#57b846' }}>Username / Password?</Text></Text>
        <TouchableOpacity style={styles.buttonLoginStyle}
          onPress={createAlert}
          activeOpacity={.5} >
          <Text style={styles.buttonTextStyle} activeOpacity={.5} >
            SIGN IN </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text2}>
        Don’t have an account?</Text>
      <Text
        style={styles.text3}
        onPress={() => {
          Linking.openURL('#');
        }}>
        SIGN UP NOW
          </Text>
      <StatusBar style="auto" />
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    lineHeight: 1.5,
    flexDirection: 'column',
  }, title: {
    fontFamily: 'JosefinSans_Bold',
    // fontWeight: 'bold',
    fontSize: 30,
    color: '#fff',
    lineHeight: 1.2,
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    backgroundColor: '#57b846',
    paddingTop: 50,
    paddingBottom: 50,
  }, input: {
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  inputUsername: {
    borderRadius: 27,
    width: '100%',
    height: 55,
    zIndex: 1,
    borderBottomWidth:1,
    // fontWeight: 'bold',
    fontFamily: 'Ubuntu_Bold',
    fontSize: 15,
    color: '#1b3815',
    lineHeight: 1.2,
    position: 'relative',
    backgroundColor: '#ebebeb',
    paddingRight: 35,
    paddingLeft: 35,
  },
  inputPassword: {
    marginTop: 15,
    // fontWeight: 'bold',
    fontFamily: 'Ubuntu_Bold',
    fontSize: 15,
    color: '#1b3815',
    position: 'relative',
    backgroundColor: '#ebebeb',
    borderRadius: 27,
    borderBottomWidth:1,
    width: '100%',
    height: 55,
    paddingRight: 35,
    paddingLeft: 35,
  },
  text1: {
    fontFamily:'Ubuntu_Regular',
    paddingTop: 25,
    paddingBottom: 30,
    textAlign: 'right',
    fontSize: 14,
    color: '#999999',

  },
  buttonLoginStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#57b846',
    borderRadius: 25,
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    height: 50,
  }, buttonTextStyle: {
    color: '#fff', 
    fontSize: 16,
    fontFamily: 'Ubuntu_Bold',
    textTransform: 'uppercase',
  }, text2: {
    fontFamily:'Ubuntu_Regular',
    fontSize: 15,
    lineHeight: 1.4,
    textAlign: 'center',
    paddingTop: 150,
    color:'#999999',
  }, text3: {
    paddingTop: 30,
    fontSize: 15,
    color: '#57b846',
    fontWeight:'bold',
    lineHeight: 1.4,
    textTransform: 'uppercase',
    fontFamily:'Ubuntu_Bold',
  },

});
