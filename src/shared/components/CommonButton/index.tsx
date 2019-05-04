import React from 'react';
import { Button, Icon, ButtonProps } from 'react-native-elements';
import style from './style';
import { greyColor, whiteColor } from '../../../app.style';
import { TouchableNativeFeedback } from 'react-native';

export interface OwnProps extends ButtonProps {
  iconName?: 'sign-in' | 'user-plus';
}

type Props = OwnProps;

export const CommonButton: React.FC<Props> = (props) => {
  const {iconName, ...rest} = props;

  const getIcon = (name: string) => (
    <Icon
      containerStyle={style.buttonIcon}
      name={name}
      type='font-awesome'
      size={20}
      color={whiteColor}
    />
  );

  return (
    <Button
      background={TouchableNativeFeedback.Ripple(greyColor)}
      buttonStyle={style.button}
      disabledStyle={style.disabled}
      {...rest}
      icon={iconName ? getIcon(iconName) : undefined}
    />
  );
};

export default React.memo(CommonButton);