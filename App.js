import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import Login from './app/login/index'
import Register from './app/register/index'
import SetTarget from './app/setTarget/index'
import Home from './app/home/index'
const AppNavigator = createStackNavigator(
  {
    LoginScreen:{
      screen: Login,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      }
    },
    RegisterScreen:{
      screen: Register,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      }
    },
    SetTargetScreen:{
      screen: SetTarget,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      }
    },
    HomeScreen:{
      screen: Home,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      }
    },
  },
  {
    initialRouteName: 'LoginScreen',
  }
);

const App = createAppContainer(AppNavigator);

export default App;
