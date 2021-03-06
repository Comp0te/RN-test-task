import React from 'react';
import { View } from 'react-native';
import RootToast from '../../../shared/components/RootToast';
import {
  createAppContainer, createSwitchNavigator, NavigationContainerComponent,
} from 'react-navigation';

import navService from '../../../shared/services/nav.service';

import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import SplashScreen from './SplashScreen';

const Navigator = createSwitchNavigator({
  SplashScreen,
  AuthNavigator,
  MainNavigator,
}, {
  initialRouteName: 'SplashScreen',
});

const NavigatorContainer = createAppContainer(Navigator);

const AppNavigator: React.FC = () => {
  const setNavigator = (navigatorRef: NavigationContainerComponent) => {
    navService.setNavigator(navigatorRef);
  };

  return (
    <View style={{flex: 1}}>
      <NavigatorContainer ref={setNavigator}/>
      <RootToast/>
    </View>
  );
};

export default AppNavigator;
