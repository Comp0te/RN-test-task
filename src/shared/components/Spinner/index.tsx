import React from 'react';
import { mainColor } from '../../../app.style';
import { ActivityIndicator } from 'react-native';

export interface OwnProps {
  size?: 'small' | 'large';
}

type Props = OwnProps;

export const Spinner: React.FC<Props> = (props) => {
  const {size} = props;

  return (
    <ActivityIndicator
      size={size ? size : 'large'}
      color={mainColor}
      animating={true}
    />
  );
};

export default React.memo(Spinner);