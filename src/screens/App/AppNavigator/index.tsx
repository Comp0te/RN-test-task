import React from 'react';
import { View } from 'react-native';
import {
  createAppContainer, NavigationContainerComponent,
} from 'react-navigation';

import navService from '../../../shared/services/nav.service';

import BottomTabBarNavigator from './BottomTabBarNavigator';

const NavigatorContainer = createAppContainer(BottomTabBarNavigator);

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
