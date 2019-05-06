import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import LoginScreen from '../../src/screens/App/AppNavigator/AuthNavigator/LoginScreen';
import { Provider } from 'react-redux';
import store from '../../src/redux/store';

it('LoginScreen renders correctly', () => {
  expect(renderer.create(
    <Provider store={store}>
      <LoginScreen/>
    </Provider>,
  )).toMatchSnapshot();
});