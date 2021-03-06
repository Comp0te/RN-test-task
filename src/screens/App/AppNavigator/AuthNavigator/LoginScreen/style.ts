import { StyleSheet } from 'react-native';
import { greyColor } from '../../../../../app.style';

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 95,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    minHeight: 460,
  },
  fieldWrapper: {
    width: '100%',
  },
  passwordWrapper: {
    width: '100%',
    marginBottom: 16,
  },
  signInWrapper: {
    width: '100%',
    height: 40,
    marginBottom: 30,
  },
  singUpWrapper: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 160,
    height: 33,
  },
  text: {
    fontWeight: '400',
    fontSize: 11,
    color: greyColor,
  },
});

export default style;