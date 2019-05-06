import { StyleSheet } from 'react-native';
import { mainColor } from '../../../app.style';

const style = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 30,
  },
  rate: {
    marginLeft: 10,
    fontWeight: '700',
    fontSize: 14,
    color: mainColor,
  },
});

export default style;