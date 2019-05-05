import React, { useEffect } from 'react';
import { connect, DispatchProp } from 'react-redux';
import style from './style';

import { SafeAreaView } from 'react-native';

import authService from '../../../../shared/services/auth.service';
import navService from '../../../../shared/services/nav.service';
import * as authAC from '../../../../redux/auth/AC';
import { Spinner } from '../../../../shared/components/Spinner';

type Props = DispatchProp<authAC.Actions>;

const SplashScreen: React.FC<Props> = ({dispatch}) => {

  useEffect(() => {
    const subscriber = authService.getToken().subscribe(token => {
      if (token) {
        dispatch(authAC.Actions.setIsAuthUser(true));
      }

      navService.navigate(token ? 'ProductsNavigator' : 'ProfileNavigator');
      subscriber.unsubscribe();
    });
  }, []);

  return (
    <SafeAreaView style={style.root}>
      <Spinner/>
    </SafeAreaView>
  );
};

export default connect()(SplashScreen);