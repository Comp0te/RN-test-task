import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import SplashScreen from '../../src/screens/App/AppNavigator/SplashScreen';
import { Provider } from 'react-redux';
import store from '../../src/redux/store';

it('SplashScreen renders correctly', () => {
  expect(renderer.create(
    <Provider store={store}>
      <SplashScreen/>
    </Provider>,
  )).toMatchSnapshot();
});