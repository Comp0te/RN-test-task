import React from 'react';
import { Input, InputProps } from 'react-native-elements';
import { View } from 'react-native';
import { WrappedFieldProps } from 'redux-form';
import style from './style';
import { greyColor, mainColor } from '../../../app.style';

export interface OwnProps extends InputProps {
  leftIconName: 'user' | 'lock';
}

type Props = OwnProps & WrappedFieldProps;

export const FieldInput: React.FC<Props> = (props) => {
  const {
    input: {onChange, onFocus, ...restInput},
    meta: {touched, error, active},
    leftIconName, ...rest
  } = props;

  const getIcon = (name: string) => ({
    type: 'font-awesome',
    name,
    size: 20,
    color: active ? mainColor : greyColor,
  });

  return (
    <View style={style.root}>
      <Input
        {...restInput}
        {...rest}
        onChangeText={onChange}
        onFocus={onFocus as any}
        placeholderTextColor={greyColor}
        errorStyle={style.errorStyle}
        leftIconContainerStyle={style.leftIconContainerStyle}
        errorMessage={!active && touched ? error : undefined}
        leftIcon={
          leftIconName ?
            getIcon(leftIconName) :
            undefined
        }
        inputStyle={style.inputText}
      />
    </View>
  );
};

export default React.memo(FieldInput);