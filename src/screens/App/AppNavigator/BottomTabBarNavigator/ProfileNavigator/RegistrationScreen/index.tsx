import React from 'react';
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
import { passwordRegistration, confirmPassword } from '../../../../../../shared/validators/password';
import { userNameLetters } from '../../../../../../shared/validators/userName';
import { maxLengthUserName, minLengthUserName } from '../../../../../../shared/validators/lenght';

import { AuthInput } from '../../../../../../shared/services/auth.service';
import { RootState } from '../../../../../../redux/store';

import navService from '../../../../../../../src/shared/services/nav.service';
import * as registerAC from '../../../../../../redux/requests/requestsEntities/auth/register/AC';
import { getIsRegisterRequestLoading } from '../../../../../../redux/requests/selectors';

export interface RegisterFormData extends AuthInput {
  confirmPassword: string;
}

interface StateProps {
  isLoading: boolean;
}

const mapStateToProps = (state: RootState): StateProps => ({
  isLoading: getIsRegisterRequestLoading(state),
});

type Props = StateProps & InjectedFormProps<RegisterFormData>;

const RegistrationScreen: React.FC<Props> = (props) => {
  const {handleSubmit, isLoading} = props;

  const submitRegister = (values: RegisterFormData, dispatch: Dispatch<registerAC.Actions>) => {
    const input: AuthInput = {
      username: values.username,
      password: values.password,
    };

    dispatch(registerAC.Actions.register(input));
  };

  const toLoginScreen = () => {
    navService.navigate('LoginScreen');
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
          <View style={style.fieldWrapper}>
            <Field
              name='password'
              component={FieldInput}
              placeholder='Password'
              leftIconName='lock'
              validate={[required, passwordRegistration]}
              secureTextEntry={true}
            />
          </View>
          <View style={style.passwordWrapper}>
            <Field
              name='confirmPassword'
              component={FieldInput}
              placeholder='Confirm Password'
              leftIconName='lock'
              validate={[required, confirmPassword]}
              secureTextEntry={true}
            />
          </View>
          <View style={style.signInWrapper}>
            <CommonButton
              title='SIGN UP'
              loading={isLoading}
              disabled={isLoading}
              onPress={handleSubmit(submitRegister)}
              iconName='user-plus'
            />
          </View>
          <View style={style.singUpWrapper}>
            <Text style={style.text}>
              {'Already have an account? '.toUpperCase()}
            </Text>
            <TouchableOpacity
              onPress={toLoginScreen}
              hitSlop={{
                top: 10,
                bottom: 10,
                right: 0,
                left: 0,
              }}
            >
              <Text style={[style.text, style.textLink]}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default compose<React.ComponentType>(
  reduxForm<RegisterFormData>({
    form: 'register',
  }),
  connect(mapStateToProps),
)(RegistrationScreen);
