import { StyleSheet } from 'react-native';
import { mainColor, whiteColor } from '../../../../../app.style';

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputText: {
    width: '100%',
    height: '100%',
    padding: 15,
    paddingTop: 15,
    borderWidth: 0,
    fontSize: 14,
    fontWeight: '400',
    color: mainColor,
  },
  containerStyle: {
    marginBottom: 20,
    backgroundColor: whiteColor,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  inputContainerStyle: {
    height: 130,
    borderBottomWidth: 1,
    borderWidth: 1,
    borderColor: mainColor,
    borderRadius: 10,
    backgroundColor: whiteColor,
  },
  rateWrapper: {
    marginBottom: 40,
  },
});

export default style;