import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Signup from './screen/signup'
import Login from './screen/login'
import ApiSignUP from './screen/apisignUp'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApiSignin from './screen/apiSignin'
export default class App extends Component {
 
  render() {
    const Stack = createNativeStackNavigator();
    return (
  
      <NavigationContainer >
      <Stack.Navigator initialRouteName="LoginApi" >
      
  
      <Stack.Screen name="ApiSignUP" component={ApiSignUP} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoginApi" component={ApiSignin} />
      
    
   
      </Stack.Navigator>
    </NavigationContainer>

    )
  }
}

