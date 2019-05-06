import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import RegistrationScreen from '../../src/screens/App/AppNavigator/AuthNavigator/RegistrationScreen';
import { Provider } from 'react-redux';
import store from '../../src/redux/store';

it('RegistrationScreen renders correctly', () => {
  expect(renderer.create(
    <Provider store={store}>
      <RegistrationScreen/>
    </Provider>,
  )).toMatchSnapshot();
});