import React, {Component,useState} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
Button,Alert,Image,ImageBackground,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './scrns/home';

import Signup from './scrns/Signup';
import Login from './scrns/Login';
   
///////

const Stack = createStackNavigator();
   


export default function App(){
    return(

         <NavigationContainer>
        <Stack.Navigator initialRouteName="Signup">
        
          <Stack.Screen 
         name="Home"
         component={Home}
        
         />

        
         
         <Stack.Screen 
         name="Signup"
         component={Signup}
        
         />
        <Stack.Screen 
         name="Login"
         component={Login}
        
         />

     </Stack.Navigator>
     </NavigationContainer>
    );
  }