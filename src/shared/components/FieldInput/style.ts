import { StyleSheet } from 'react-native';
import { errorColor, mainColor } from '../../../app.style';

const style = StyleSheet.create({
  root: {
    justifyContent: 'flex-start',
    width: '100%',
    minHeight: 72,
    paddingBottom: 5,
  },
  inputText: {
    width: '100%',
    height: 40,
    paddingRight: 25,
    borderWidth: 0,
    fontSize: 14,
    fontWeight: '400',
    color: mainColor,
  },
  errorStyle: {
    fontSize: 11,
    fontWeight: '400',
    color: errorColor,
  },
  leftIconContainerStyle: {
    width: 30,
  },
});

export default style;