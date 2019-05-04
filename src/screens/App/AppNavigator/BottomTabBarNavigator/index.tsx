import React from 'react';
import style from './style';
import { greyColor, mainColor } from '../../../../app.style';

import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation';

import ProfileScreen from './ProfileScreen';
// import ProductsNavigator from './ProductsNavigator';
// import HomeScreen from './ProductsNavigator/HomeScreen';
import navService from '../../../../shared/services/nav.service';

export default createBottomTabNavigator({
  ProductsScreen: {
    screen: ProfileScreen,
    navigationOptions: navService.navigationOptions('products'),
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: navService.navigationOptions('profile'),
  },
}, {
  initialRouteName: 'ProfileScreen',

  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused}) => {
      const {routeName} = navigation.state;

      if (routeName === 'ProfileScreen') {
        return (
          <Icon
            name={focused ? 'user' : 'user-o'}
            type='font-awesome'
            size={22}
            color={focused ? mainColor : greyColor}
          />
        );
      } else {
        return (
          <Icon
            name={focused ? 'star' : 'star-o'}
            type='font-awesome'
            size={22}
            color={focused ? mainColor : greyColor}
          />
        );
      }
    },
  }),
  tabBarOptions: {
    showLabel: false,
    tabStyle: style.tabStyle,
    style: style.style,
  },
});
