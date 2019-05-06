import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import { SplashScreen } from '../../src/screens/App/AppNavigator/SplashScreen';

it('SplashScreen renders correctly', () => {
  const fn = jest.fn();
  expect(renderer.create(
    <SplashScreen
      dispatch={fn}
    />,
  )).toMatchSnapshot();
});