import React, { useCallback, useEffect } from 'react';
import { compose, Dispatch } from 'redux';
import { connect } from 'react-redux';
import style from './style';

import {
  View, Text, SafeAreaView,
  KeyboardAvoidingView, ScrollView,
} from 'react-native';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import FieldInput from '../../../../../shared/components/FieldInput';
import CommonButton from '../../../../../shared/components/CommonButton';
import Link from '../../../../../shared/components/Link';

import required from '../../../../../shared/validators/required';
import { passwordLogin } from '../../../../../shared/validators/password';
import { userNameLetters } from '../../../../../shared/validators/userName';
import { maxLengthUserName, minLengthUserName } from '../../../../../shared/validators/lenght';

import { AuthInput } from '../../../../../shared/services/auth.service';
import { RootState } from '../../../../../redux/store';
import { NavigationInjectedProps } from 'react-navigation';

import navService from '../../../../../../src/shared/services/nav.service';
import * as loginAC from '../../../../../redux/requests/requestsEntities/auth/login/AC';
import { getIsLoginRequestLoading } from '../../../../../redux/requests/selectors';

type LoginFormData = AuthInput;

interface StateProps {
  isLoading: boolean;
}

const mapStateToProps = (state: RootState): StateProps => ({
  isLoading: getIsLoginRequestLoading(state),
});

type Props = StateProps & InjectedFormProps<LoginFormData> & NavigationInjectedProps;

const LoginScreen: React.FC<Props> = (props) => {
  const {handleSubmit, isLoading, destroy, navigation} = props;

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

  const toProductsScreen = () => {
    navService.navigate('ProductsScreen');
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
          <Link
            toScreen={toProductsScreen}
            text='SIGN IN LATER'
          />
          <View style={style.singUpWrapper}>
            <Text style={style.text}>
              {'Do not have an account? '.toUpperCase()}
            </Text>
            <Link
              toScreen={toRegistrationScreen}
              text='SIGN UP'
            />
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
