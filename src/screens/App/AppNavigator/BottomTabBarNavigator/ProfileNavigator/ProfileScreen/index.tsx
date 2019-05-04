import React, { useCallback } from 'react';
import { connect, DispatchProp } from 'react-redux';
import style from './style';

import { SafeAreaView } from 'react-native';
import CommonButton from '../../../../../../shared/components/CommonButton';

import * as authAC from '../../../../../../redux/auth/AC';

type Props = DispatchProp<authAC.Actions>;

const ProfileScreen: React.FC<Props> = (props) => {
  const {dispatch} = props;

  const onPressLogOut = useCallback(() => {
    dispatch(authAC.Actions.logout());
  }, []);

  return (
    <SafeAreaView style={style.safeArea}>
      <CommonButton
        title='SIGN OUT'
        onPress={onPressLogOut}
        iconName='sign-out'
      />
    </SafeAreaView>
  );
};

export default connect()(React.memo(ProfileScreen));
