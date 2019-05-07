import React from 'react';
import { createStackNavigator, NavigationScreenProps } from 'react-navigation';

import navService from '../../../../shared/services/nav.service';
import { ProductDetailNavParams } from '../../../../shared/components/ProductItem';

import BottomTabBarNavigator from './BottomTabBarNavigator';
import ProductDetailScreen from './ProductDetailScreen';
import AddReviewScreen from './AddReviewScreen';

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
    AddReviewScreen: {
      screen: AddReviewScreen,
      navigationOptions: navService.navigationOptions('Add Review'),
    },
  }
  , {
    initialRouteName: 'BottomTabBarNavigator',
    headerBackTitleVisible: false,
  });
