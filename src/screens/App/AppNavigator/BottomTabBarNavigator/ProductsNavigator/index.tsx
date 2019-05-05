import React from 'react';
import { createStackNavigator } from 'react-navigation';

import navService from '../../../../../shared/services/nav.service';

import ProductsScreen from './ProductsScreen';

export default createStackNavigator({
    ProductsScreen: {
      screen: ProductsScreen,
      navigationOptions: navService.navigationOptions('Products'),
    },
  }
  , {
    initialRouteName: 'ProductsScreen',
    headerBackTitleVisible: false,
  });
