import { StyleSheet } from 'react-native';
import { deviderColor, mainColor, whiteColor } from '../../../../../../app.style';

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  root: {
    flex: 1,
    paddingTop: 59,
    backgroundColor: whiteColor,
  },
  image: {
    alignSelf: 'center',
    marginBottom: 10,
    width: 120,
    height: 120,
  },
  placeholderStyle: {
    backgroundColor: whiteColor,
  },
  text: {
    marginBottom: 5,
    fontSize: 14,
    color: mainColor,
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  productTextWrapper: {
    flex: 1,
    padding: 10,
    marginRight: 5,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: deviderColor,
    borderRadius: 10,
  },
  reviewListWrapper: {
    height: 250,
  },
});

export default style;