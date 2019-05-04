import { Dimensions, TextStyle, ViewStyle } from 'react-native';

export const mainColor = '#4B1E10';
export const whiteColor = '#FFFFFF';
export const blackColor = '#000000';
export const greyColor = '#BEBEBE';

export const headerTitleStyle: TextStyle = {
  fontWeight: '700',
  fontSize: 16,
  color: blackColor,
  alignSelf: 'center',
};

export const headerStyle: ViewStyle = {
  alignSelf: 'center',
  height: 49,
  width: '100%',
  backgroundColor: whiteColor,
  borderBottomWidth: 0.5,
  borderBottomColor: 'rgba(0, 0, 0, 0.25)',
};

export const headerTitleContainerStyle: ViewStyle = {
  position: 'absolute',
  left: 30,
  right: 30,
  justifyContent: 'center',
  width: '100%',
  maxWidth: Dimensions.get('window').width - 60,
};