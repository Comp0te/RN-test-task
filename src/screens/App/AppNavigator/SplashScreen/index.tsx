import React, { useEffect } from 'react';
import { connect, DispatchProp } from 'react-redux';
import style from './style';
import { mainColor } from '../../../../app.style';

import { SafeAreaView, ActivityIndicator } from 'react-native';

import authService from '../../../../shared/services/auth.service';
import navService from '../../../../shared/services/nav.service';
import * as authAC from '../../../../redux/auth/AC';

type Props = DispatchProp<authAC.Actions>;

const SplashScreen: React.FC<Props> = ({dispatch}) => {

  useEffect(() => {
    const subscriber = authService.getToken().subscribe(token => {
      dispatch(authAC.Actions.setIsAuthUser(true));
      navService.navigate(token ? 'ProductsScreen' : 'ProfileNavigator');
      subscriber.unsubscribe();
    });
  }, []);

  return (
    <SafeAreaView style={style.root}>
      <ActivityIndicator
        size='large'
        color={mainColor}
        animating={true}
      />
    </SafeAreaView>
  );
};

export default connect()(SplashScreen);