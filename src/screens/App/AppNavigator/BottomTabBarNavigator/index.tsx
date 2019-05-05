import React from 'react';
import style from './style';
import { greyColor, mainColor } from '../../../../app.style';

import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation';

import ProductsNavigator from './ProductsNavigator';
import ProfileNavigator from './ProfileNavigator';
import navService from '../../../../shared/services/nav.service';

export default createBottomTabNavigator({
  ProductsNavigator: {
    screen: ProductsNavigator,
    navigationOptions: navService.navigationOptions('Products'),
  },
  ProfileNavigator: {
    screen: ProfileNavigator,
    navigationOptions: navService.navigationOptions('Profile'),
  },
}, {
  initialRouteName: 'ProfileNavigator',

  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, tintColor}) => {
      const {routeName} = navigation.state;

      if (routeName === 'ProfileNavigator') {
        return (
          <Icon
            name={focused ? 'user' : 'user-o'}
            type='font-awesome'
            size={22}
            color={tintColor ? tintColor : undefined}
          />
        );
      } else {
        return (
          <Icon
            name={focused ? 'star' : 'star-o'}
            type='font-awesome'
            size={22}
            color={tintColor ? tintColor : undefined}
          />
        );
      }
    },
  }),
  tabBarOptions: {
    showLabel: true,
    activeTintColor: mainColor,
    inactiveTintColor: greyColor,
    labelStyle: style.labelStyle,
    tabStyle: style.tabStyle,
    style: style.style,
  },
});
