import { StyleSheet } from 'react-native';
import { mainColor, whiteColor } from '../../../app.style';

const style = StyleSheet.create({
  inputText: {
    width: '100%',
    paddingRight: 25,
    borderWidth: 0,
    fontSize: 14,
    fontWeight: '400',
    color: mainColor,
  },
  containerStyle: {
    backgroundColor: whiteColor,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  inputContainerStyle: {
    backgroundColor: whiteColor,
    borderBottomWidth: 1,
    borderWidth: 1,
    borderColor: mainColor,
  },
});

export default style;