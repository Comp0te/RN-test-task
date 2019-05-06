import React from 'react';
import { createStackNavigator, NavigationScreenProps } from 'react-navigation';

import navService from '../../../../shared/services/nav.service';
import { ProductDetailNavParams } from '../../../../shared/components/ProductItem';

import BottomTabBarNavigator from './BottomTabBarNavigator';
import ProductDetailScreen from './ProductDetailScreen';

export default createStackNavigator({
    BottomTabBarNavigator: {
      screen: BottomTabBarNavigator,
      navigationOptions: {
        header: null,
      },
    },
    ProductDetailScreen: {
      screen: ProductDetailScreen,
      navigationOptions: ({navigation}: NavigationScreenProps<ProductDetailNavParams>) => ({
        ...navService.navigationOptions(''),
        title: `${navigation.getParam('productTitle', '')}`,
      }),
    },
  }
  , {
    initialRouteName: 'BottomTabBarNavigator',
    headerBackTitleVisible: false,
  });
