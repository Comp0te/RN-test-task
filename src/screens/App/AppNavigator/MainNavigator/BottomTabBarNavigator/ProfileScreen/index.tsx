import React, { useCallback } from 'react';
import { connect, DispatchProp } from 'react-redux';
import style from './style';

import { SafeAreaView, View } from 'react-native';
import CommonButton from '../../../../../../shared/components/CommonButton';

import * as authAC from '../../../../../../redux/auth/AC';
import { RootState } from '../../../../../../redux/store';
import { getIsAuthUser } from '../../../../../../redux/auth/selectors';
import navService from '../../../../../../../src/shared/services/nav.service';

interface StateProps {
  isAuthUser: boolean;
}

const mapStateToProps = (state: RootState): StateProps => ({
  isAuthUser: getIsAuthUser(state),
});

type Props = StateProps & DispatchProp<authAC.Actions>;

const ProfileScreen: React.FC<Props> = (props) => {
  const {dispatch, isAuthUser} = props;

  const onPressLogOut = useCallback(() => {
    dispatch(authAC.Actions.logout());
  }, []);

  const toLoginScreen = () => {
    navService.navigate('LoginScreen');
  };

  const toRegistrationScreen = () => {
    navService.navigate('RegistrationScreen');
  };

  return (
    <SafeAreaView style={style.safeArea}>
      {
        isAuthUser ?
          <CommonButton
            title='SIGN OUT'
            onPress={onPressLogOut}
            iconName='sign-out'
          /> :
          <View style={style.wrapper}>
            <CommonButton
              title='SIGN IN'
              onPress={toLoginScreen}
              iconName='sign-in'
            />
            <CommonButton
              title='SIGN UP'
              onPress={toRegistrationScreen}
              iconName='user-plus'
            />
          </View>
      }
    </SafeAreaView>
  );
};

export default connect(mapStateToProps)(React.memo(ProfileScreen));
