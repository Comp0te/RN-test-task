import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import style from './style';

export interface OwnProps {
  text: string;
  toScreen: () => void;
}

type Props = OwnProps;

export const Link: React.FC<Props> = (props) => {
  const {toScreen, text} = props;

  return (
    <TouchableOpacity
      onPress={toScreen}
      hitSlop={{
        top: 10,
        bottom: 10,
        right: 0,
        left: 0,
      }}
    >
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Link);