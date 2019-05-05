import React from 'react';
import { SearchBar, SearchBarBase } from 'react-native-elements';
import style from './style';

type Props = SearchBarBase;

export const CommonSearchBar: React.FC<Props> = (props) => {

  return (
    <SearchBar
      {...props}
      round={true}
      inputStyle={style.inputText}
      containerStyle={style.containerStyle}
      inputContainerStyle={style.inputContainerStyle}
    />
  );
};

export default React.memo(CommonSearchBar);