import { StyleSheet } from 'react-native';
import { mainColor, whiteColor } from '../../../../../../app.style';

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  root: {
    flex: 1,
    paddingTop: 59,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: whiteColor,
  },
  image: {
    alignSelf: 'center',
    marginBottom: 10,
    width: 150,
    height: 150,
  },
  placeholderStyle: {
    backgroundColor: whiteColor,
  },
  text: {
    fontSize: 16,
    color: mainColor,
    textAlign: 'center',
  },
});

export default style;