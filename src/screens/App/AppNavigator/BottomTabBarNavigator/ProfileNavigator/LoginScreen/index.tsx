import React, { useCallback, useEffect } from 'react';
import { compose, Dispatch } from 'redux';
import { connect } from 'react-redux';
import style from './style';

import {
  View, Text, TouchableOpacity, SafeAreaView,
  KeyboardAvoidingView, ScrollView,
} from 'react-native';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import FieldInput from '../../../../../../shared/components/FieldInput';
import CommonButton from '../../../../../../shared/components/CommonButton';

import required from '../../../../../../shared/validators/required';
import { passwordLogin } from '../../../../../../shared/validators/password';
import { userNameLetters } from '../../../../../../shared/validators/userName';
import { maxLengthUserName, minLengthUserName } from '../../../../../../shared/validators/lenght';

import { AuthInput } from '../../../../../../shared/services/auth.service';
import { RootState } from '../../../../../../redux/store';
import { NavigationInjectedProps } from 'react-navigation';

import navService from '../../../../../../../src/shared/services/nav.service';
import * as loginAC from '../../../../../../redux/requests/requestsEntities/auth/login/AC';
import { getIsLoginRequestLoading } from '../../../../../../redux/requests/selectors';
import { getIsAuthUser } from '../../../../../../redux/auth/selectors';

type LoginFormData = AuthInput;

interface StateProps {
  isLoading: boolean;
  isAuthUser: boolean;
}

const mapStateToProps = (state: RootState): StateProps => ({
  isLoading: getIsLoginRequestLoading(state),
  isAuthUser: getIsAuthUser(state),
});

type Props = StateProps & InjectedFormProps<LoginFormData> & NavigationInjectedProps;

const LoginScreen: React.FC<Props> = (props) => {
  const {handleSubmit, isLoading, destroy, navigation, isAuthUser} = props;

  useEffect(() => {
    if (isAuthUser) {
      navService.navigate('ProfileScreen');
    }
  }, []);

  const onBlur = useCallback(() => {
    destroy();
  }, []);

  useEffect(() => {
    const focusListener = navigation.addListener('willBlur', onBlur);

    return () => focusListener.remove();
  }, [onBlur]);

  const submitLogin = (values: LoginFormData, dispatch: Dispatch<loginAC.Actions>) => {
    dispatch(loginAC.Actions.login(values));
  };

  const toRegistrationScreen = () => {
    navService.navigate('RegistrationScreen');
  };

  return (
    <SafeAreaView style={style.safeArea}>
      <ScrollView contentContainerStyle={style.safeArea}>
        <KeyboardAvoidingView
          behavior='padding'
          style={style.root}
        >
          <View style={style.fieldWrapper}>
            <Field
              name='username'
              component={FieldInput}
              keyboard='default'
              placeholder='User name'
              leftIconName='user'
              maxLength={20}
              validate={[
                required,
                userNameLetters,
                maxLengthUserName,
                minLengthUserName,
              ]}
            />
          </View>
          <View style={style.passwordWrapper}>
            <Field
              name='password'
              component={FieldInput}
              placeholder='Password'
              leftIconName='lock'
              validate={[required, passwordLogin]}
              secureTextEntry={true}
            />
          </View>
          <View style={style.signInWrapper}>
            <CommonButton
              title='SIGN IN'
              loading={isLoading}
              disabled={isLoading}
              onPress={handleSubmit(submitLogin)}
              iconName='sign-in'
            />
          </View>
          <View style={style.singUpWrapper}>
            <Text style={style.text}>
              {'Do not have an account? '.toUpperCase()}
            </Text>
            <TouchableOpacity
              onPress={toRegistrationScreen}
              hitSlop={{
                top: 10,
                bottom: 10,
                right: 0,
                left: 0,
              }}
            >
              <Text style={[style.text, style.textLink]}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default compose<React.ComponentType>(
  reduxForm<LoginFormData>({
    form: 'login',
  }),
  connect(mapStateToProps),
)(LoginScreen);
