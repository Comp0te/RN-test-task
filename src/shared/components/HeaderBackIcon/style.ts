import { Platform, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  icon: {
    padding: 10,
    ...Platform.select({
      ios: {
        marginLeft: 6,
      },
    }),
  },
});

export default style;