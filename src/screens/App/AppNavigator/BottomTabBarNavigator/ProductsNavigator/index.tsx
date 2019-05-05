import React from 'react';
import { createStackNavigator, NavigationScreenProps } from 'react-navigation';
import { ProductDetailNavParams } from '../../../../../shared/components/ProductItem';

import navService from '../../../../../shared/services/nav.service';

import ProductsScreen from './ProductsScreen';
import ProductDetailScreen from './ProductDetailScreen';

export default createStackNavigator({
    ProductsScreen: {
      screen: ProductsScreen,
      navigationOptions: navService.navigationOptions('Products'),
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
    initialRouteName: 'ProductsScreen',
    headerBackTitleVisible: false,
  });
