import React from 'react';
import { View } from 'react-native';
import {
  createAppContainer, createSwitchNavigator, NavigationContainerComponent,
} from 'react-navigation';

import navService from '../../../shared/services/nav.service';

import BottomTabBarNavigator from './BottomTabBarNavigator';
import SplashScreen from './SplashScreen';

const Navigator = createSwitchNavigator({
  SplashScreen,
  BottomTabBarNavigator,
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
    </View>
  );
};

export default AppNavigator;
