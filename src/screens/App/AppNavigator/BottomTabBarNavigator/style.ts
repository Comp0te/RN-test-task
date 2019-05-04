import { StyleSheet, Platform } from 'react-native';
import { whiteColor } from '../../../../app.style';

const style = StyleSheet.create({
  tabStyle: {
    height: 40,
  },
  style: {
    height: 40,
    backgroundColor: whiteColor,
    ...Platform.select({
      ios: {
        shadowColor: '#E0E0E0',
        shadowOffset: {width: 0, height: -1},
        shadowOpacity: 0.5,
        shadowRadius: 4,
        borderTopWidth: 0,
      },
      android: {
        borderTopWidth: 0.5,
        borderBottomColor: 'rgba(224, 224, 224, 0.5)',
      },
    }),
  },
});

export default style;