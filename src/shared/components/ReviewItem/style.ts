import { StyleSheet } from 'react-native';
import { mainColor, whiteColor } from '../../../app.style';

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: mainColor,
  },
  image: {
    width: 50,
    height: 50,
  },
  placeholderStyle: {
    backgroundColor: whiteColor,
  },
});

export default style;