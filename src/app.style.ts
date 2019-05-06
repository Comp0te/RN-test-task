import { Dimensions, TextStyle, ViewStyle } from 'react-native';

export const mainColor = '#860483';
export const starColor = '#F1C40F';
export const mainColorOpacity = 'rgba(134, 4, 131, 0.3)';
export const whiteColor = '#FFFFFF';
export const blackColor = '#000000';
export const greyColor = '#BEBEBE';
export const errorColor = '#DF2336';
export const deviderColor = '#BCBBC1';

export const headerTitleStyle: TextStyle = {
  fontWeight: '700',
  fontSize: 16,
  color: mainColor,
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