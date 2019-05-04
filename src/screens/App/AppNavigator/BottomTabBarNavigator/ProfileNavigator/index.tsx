import React from 'react';
import { createStackNavigator } from 'react-navigation';

import navService from '../../../../../shared/services/nav.service';

import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import ProfileScreen from './ProfileScreen';

export default createStackNavigator({
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: navService.navigationOptions('Sing In'),
    },
    RegistrationScreen: {
      screen: RegistrationScreen,
      navigationOptions: {
        ...navService.navigationOptions('Sign Up'),
        headerLeft: null,
      },
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        ...navService.navigationOptions('Profile'),
        headerLeft: null,
      },
    },
  }
  , {
    initialRouteName: 'LoginScreen',
    headerBackTitleVisible: false,
  });
