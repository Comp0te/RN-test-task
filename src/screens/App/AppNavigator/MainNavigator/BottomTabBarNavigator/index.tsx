import React from 'react';
import style from './style';
import { greyColor, mainColor } from '../../../../../app.style';

import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation';

import navService from '../../../../../shared/services/nav.service';

import ProductsScreen from './ProductsScreen';
import ProfileScreen from './ProfileScreen';

export default createBottomTabNavigator({
  ProductsScreen: {
    screen: ProductsScreen,
    navigationOptions: {
      ...navService.navigationOptions('Products'),
      header: null,
    },
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      ...navService.navigationOptions('Profile'),
      header: null,
    },
  },
}, {
  initialRouteName: 'ProductsScreen',

  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, tintColor}) => {
      const {routeName} = navigation.state;

      if (routeName === 'ProfileScreen') {
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
