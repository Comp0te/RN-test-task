import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import navService from '../../../../shared/services/nav.service';

import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';

export default createSwitchNavigator({
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
  }
  , {
    initialRouteName: 'LoginScreen',
  });
