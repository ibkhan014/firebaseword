import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Signup from './screen/signup'
import Login from './screen/login'
import ApiSignUP from './screen/apisignUp'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApiSignin from './screen/apiSignin'
import Home from './screen/home'
import Camera from './screen/camera'
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();
import { createStore, combineReducers } from 'redux'
export default class App extends Component {
 
  render() {
    const Stack = createNativeStackNavigator();
    return (


      ///create store that is available in main app.js after that 
      <Provider store={store}>
      <NavigationContainer >
    
      <Drawer.Navigator>
      <Drawer.Screen name="ApiSignUP" component={ApiSignUP} />
      <Drawer.Screen name="Signup" component={Signup} />
    </Drawer.Navigator>
    </NavigationContainer>
    </Provider>

    )
  }
}



const initialState = {
  counter: 0,
};

const notificationCounter = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NOTIFICATIONS_COUNTER":
      return { counter: action.counts };
    case "RESET_NOTIFICATIONS_COUNTER":
      return { counter: 0 };
  }
  return state;
};

const initialFriendState = {
  friends: [],
};

const friendsReducer = (state = initialFriendState, action) => {
  switch (action.type) {
    case "UPDATE_FRIENDS":
      return { friends: action.list };
    case "RESET_FRIENDS":
      return { friends: [] };
  }
  return state;
};


const themeReducer = (state = {mode:"light"}, action) => {
  switch (action.type) {
    case "UPDATE_THEME":
      return { mode: action.mode };
  }
  return state;
};
////initailize the work u wana do  in reducer after that u will create function of that work and do action in it///
const reducer = combineReducers({
  notificationCounter,
  friendsReducer,
  themeReducer
});

const store = createStore(reducer);
