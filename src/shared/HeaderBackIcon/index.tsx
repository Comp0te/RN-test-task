import React from 'react';
import { Icon } from 'react-native-elements';
import style from './style';
import { mainColor } from '../../app.style';

const HeaderBackIcon: React.FC = () => {
  return (
    <Icon
      name='chevron-left'
      type='font-awesome'
      size={18}
      color={mainColor}
      iconStyle={style.icon}
    />
  );
};

export default React.memo(HeaderBackIcon);
