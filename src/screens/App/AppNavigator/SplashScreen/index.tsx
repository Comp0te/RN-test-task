import React, { useEffect } from 'react';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import style from './style';

import authService from '../../../../shared/services/auth.service';
import navService from '../../../../shared/services/nav.service';
import { mainColor } from '../../../../app.style';

const SplashScreen: React.FC = () => {

  useEffect(() => {
    const subscriber = authService.getToken().subscribe(token => {
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

export default SplashScreen;