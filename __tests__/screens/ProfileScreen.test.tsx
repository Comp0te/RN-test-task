import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import ProfileScreen from '../../src/screens/App/AppNavigator/MainNavigator/BottomTabBarNavigator/ProfileScreen';
import { Provider } from 'react-redux';
import store from '../../src/redux/store';

it('ProfileScreen renders correctly', () => {
  expect(renderer.create(
    <Provider store={store}>
      <ProfileScreen/>
    </Provider>,
  )).toMatchSnapshot();
});