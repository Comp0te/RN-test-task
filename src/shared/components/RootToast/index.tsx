import React, { useEffect, useRef } from 'react';
import Toast from 'react-native-easy-toast';
import { connect } from 'react-redux';
import { ToastAndroid, Platform } from 'react-native';

import { RootState } from '../../../redux/store';
import { Dispatch } from 'redux';

import { Actions as toastActions } from '../../../redux/toast/AC';
import { getToastMessage } from '../../../redux/toast/selectors';

interface StateProps {
  message: string | null;
}

interface DispatchProps {
  resetToastMessage(): void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  message: getToastMessage(state),
});

const mapDispatchToProps = (dispatch: Dispatch<toastActions>): DispatchProps => (
  {
    resetToastMessage: () => {
      dispatch(toastActions.hideToast());
    },
  }
);

type Props = StateProps & DispatchProps;

const RootToast: React.FC<Props> = ({message, resetToastMessage}) => {
  const toastRef = useRef<Toast>(null);

  useEffect(() => {
    if (message && toastRef.current) {
      toastRef.current.show(message, 3000);
      resetToastMessage();
    }

    if (Platform.OS === 'android' && message) {
      ToastAndroid.show(message, ToastAndroid.SHORT);
      resetToastMessage();
    }
  }, [message]);

  return (
    Platform.OS === 'ios' ?
      <Toast ref={toastRef}/> :
      null
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(
  React.memo(RootToast),
);