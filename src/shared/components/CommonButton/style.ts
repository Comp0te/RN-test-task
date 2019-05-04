import { StyleSheet  } from 'react-native';
import { mainColor, mainColorOpacity } from '../../../app.style';

const style = StyleSheet.create({
  button: {
    backgroundColor: mainColor,
  },
  disabled: {
    backgroundColor: mainColorOpacity,
  },
  buttonIcon: {
    marginRight: 10,
  },
});

export default style;