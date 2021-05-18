import React,{Profiler, useEffect,useState} from 'react';
import {Platform, StyleSheet, Text,  View, Dimensions,TouchableOpacity,
 Alert, Image,ImageBackground,StatusBar} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const Signup = ({navigation,route})=>{

      const [name,setName] = useState("name")
      const [email,setEmail] = useState("email")
      const [password,setPassword] = useState("password")
      const [gender,setGender] = useState("gender")
      const [mobile,setMobile] = useState("mobile")
      const [state,setState] = useState("state")
      const [district,setDistrict] = useState("district")
      const [address,setAddress] = useState("address")
      const [enableshift,setenableShift] = useState(false)
      const saveData = ()=>{
        fetch("http://172.20.10.2:5000/api/user/register",{
         method:"post",
         headers:{
           'Content-Type': 'application/json'
         },
         body:JSON.stringify({
             name,
             email,
             password
         })
     })
     .then(res=>res.json())
     .then(data=>{
         Alert.alert('user signed up succesfully')
         navigation.navigate("Home")
     })
     .catch(err=>{
       Alert.alert("someting went wrong")
   })
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.input}>WELCOME</Text>
  <Text style={styles.input1} >Create a new account</Text>
  
  

    
  <View >
    <View style={styles.inputContainer}>
     <TextInput
                label='Name'
                style={styles.inputStyle}
               // value={Name}
                onFocus={()=>setenableShift(false)}
                theme={theme}
                mode="outlined"
                onChangeText={text => setName(text)}
            />
            </View>
            <View style={styles.inputContainer}>
            <TextInput
                label='Email'
                style={styles.inputStyle}
                //value={Gender}
                theme={theme}
                onFocus={()=>setenableShift(false)}
                mode="outlined"
                onChangeText={text => setEmail(text)}
            />
            </View>
            <View style={styles.inputContainer}>
            <TextInput
                label='Password'
                style={styles.inputStyle}
                //value={Email}
                theme={theme}
                onFocus={()=>setenableShift(false)}
               // keyboardType="Em"
                mode="outlined"
                onChangeText={text =>setPassword(text)}
            />
             </View >
             <View style={styles.inputContainer}>
            <TextInput
                label='Gender'
                style={styles.inputStyle}
                //value={Gender}
                theme={theme}
                onFocus={()=>setenableShift(false)}
                mode="outlined"
                onChangeText={text => setGender(text)}
            />
            </View>
            <View style={styles.inputContainer}>
            <TextInput
                label='mobile'
                style={styles.inputStyle}
                //value={Gender}
                theme={theme}
                onFocus={()=>setenableShift(false)}
                mode="outlined"
                onChangeText={text => setMobile(text)}
            />
            </View><View style={styles.inputContainer}>
            <TextInput
                label='State'
                style={styles.inputStyle}
                //value={Gender}
                theme={theme}
                onFocus={()=>setenableShift(false)}
                mode="outlined"
                onChangeText={text => setState(text)}
            />
            </View><View style={styles.inputContainer}>
            <TextInput
                label='District'
                style={styles.inputStyle}
                //value={Gender}
                theme={theme}
                onFocus={()=>setenableShift(false)}
                mode="outlined"
                onChangeText={text => setDistrict(text)}
            />
            </View>
            <View style={styles.inputContainer}>
            <TextInput
                label='Address'
                style={styles.inputStyle}
                //value={Gender}
                theme={theme}
                onFocus={()=>setenableShift(false)}
                mode="outlined"
                onChangeText={text => setAddress(text)}
            />
            </View>
  <Text style={styles.input2} >Already a user,</Text>
     <Button style={styles.button} theme={theme} mode="contained" onPress={() => saveData() .this.props.navigation.navigate('Home')} >
       
       <Text >SIGN UP</Text>
       
       
     </Button>
     <Button style={styles.button1} theme={theme} mode="text" onPress={() =>{navigation.navigate('Login')}} >
       <Text >Sign in</Text>
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
    input:{
      fontWeight:"bold",
      fontSize:25,
        color: 'black',
      bottom:130,
      },
    button: {
      position: 'relative',
      margin: 5,
     right: 10,
     left:90,
      bottom: 30,
     // top:,
      width:200,
      alignItems: 'center'
    },
    input1:{
     // fontWeight:"bold",
      fontSize:18,
        color: 'black',
      bottom:14,
      right:80,
      },
      input2:{
     // fontWeight:"bold",
      fontSize:18,
        color: 'black',
      top:60,
      right: 10,
     left:190,
      },
      button1:{
        position: 'relative',
      margin: 5,
     right: 10,
     left:250,
      bottom: 25,
     //top:,
      width:200,
      alignItems: 'center'
         },
      
    
    

  })

       
export default Signup;