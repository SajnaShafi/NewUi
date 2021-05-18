import React,{Profiler, useEffect,useState} from 'react';
import {Platform, StyleSheet, Text,  View, Dimensions,TouchableOpacity,
 Alert, Image,ImageBackground,StatusBar} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props, {navigation})=>{

      const [email,setEmail] = useState("email")
      const [password,setPassword] = useState("password")
      const [enableshift,setenableShift] = useState(false)
      const login = ()=>{
        fetch("http://172.20.10.2:5000/api/user/login",{
          method:"post",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
             email,
             password
          })
      })
      //.then(res=>res.json())
      //.then(data=>{
        .then(async (res) => {
          if (res.status == 202) {
            const cookie = res.headers.get('auth-token');
            await AsyncStorage.setItem('token', cookie);
           // setLoading(false);
           Alert.alert(`USER SIGNED IN SUCCESFULLY`)
            props.navigation.replace('Home');
          } else if (res.status == 400) {
           // setLoading(false);
            Alert.alert('No user found');
            
          } else if (res.status == 401) {
            //setLoading(false);
            Alert.alert('password doesnot match');
          }
    
          else if (res.status == 402) {
            //setLoading(false);
            Alert.alert('Enter Valid Email/password');
          }
            
           // console.log(data)
           // props.navigation.replace("Home")
    
         /*  try {
           await AsyncStorage.setItem('token',data)
           props.navigation.replace("home")
          } catch (e) {
            console.log("error hai",e)
             Alert('SOMETHING WENT WRONG')
         } */
    })
       }
    
  
    return (
      <View style={styles.container}>
      <View >
      <View style={styles.inputContainer}>
     <TextInput
                label='Email'
                style={styles.inputStyle}
                onFocus={()=>setenableShift(false)}
                theme={theme}
                mode="outlined"
                onChangeText={text => setEmail(text)}
            />
            </View>
            <View style={styles.inputContainer}>
            <TextInput
                label='Password'
                style={styles.inputStyle}
                theme={theme}
                onFocus={()=>setenableShift(false)}
                mode="outlined"
                onChangeText={text => setPassword(text)}
            />
            </View>
          <Button style={styles.button} theme={theme} mode="contained" onPress={() => login()} >
          <Text >LOGIN</Text>
          </Button>
          </View>
          </View>
    );
    }
  
  const theme = {
    colors:{
        primary:"#6495ed"
    }
}
  const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
    },
    inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
     },
     inputContainer: {
      width:390,
      height:45,
      padding:9,
      margin:14,
      flexDirection: 'column-reverse'
    },
    button: {
      position: 'relative',
      margin: 9,
     right: 10,
     left:90,
     // bottom: 50,
     // top:50,
      width:200,
      alignItems: 'center'
    },
    })
export default Login;