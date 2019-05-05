import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import ProductsScreen from '../../src/screens/App/AppNavigator/BottomTabBarNavigator/ProductsNavigator/ProductsScreen';
import { Provider } from 'react-redux';
import store from '../../src/redux/store';

it('ProductsScreen renders correctly', () => {
  expect(renderer.create(
    <Provider store={store}>
      <ProductsScreen/>
    </Provider>,
  )).toMatchSnapshot();
});