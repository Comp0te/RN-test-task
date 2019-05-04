import { StyleSheet  } from 'react-native';
import { errorColor, mainColor } from '../../../app.style';

const style = StyleSheet.create({
  inputText: {
    width: '100%',
    paddingRight: 25,
    borderWidth: 0,
    fontSize: 14,
    fontWeight: '400',
    color: mainColor,
  },
  errorStyle: {color: errorColor},
  leftIconContainerStyle: {width: 30},
});

export default style;