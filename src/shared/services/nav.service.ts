import React from 'react';
import { NavigationActions, NavigationContainerComponent } from 'react-navigation';
import { TextStyle, ViewStyle } from 'react-native';

import { headerTitleStyle, headerStyle, headerTitleContainerStyle } from '../../app.style';

export interface NavOptions {
  title?: string;
  headerTitle?: React.ReactNode;
  headerTitleStyle?: TextStyle;
  headerTitleContainerStyle?: ViewStyle;
  headerTintColor?: string;
  headerBackTitle?: string | null;
  headerTransparent?: boolean;
  headerRight?: JSX.Element;
  headerLeft?: JSX.Element | null;
  headerStyle?: ViewStyle;
  headerBackImage?: React.ComponentType;
}

interface INavService {
  navigate(routeName: string, params?: any): void;
  navigationOptions(title?: string, headerBackImage?: React.ComponentType): NavOptions;
}

class NavService implements INavService {
  private navigator?: NavigationContainerComponent;

  setNavigator(ref: NavigationContainerComponent) {
    this.navigator = ref;
  }

  navigate(routeName: string, params?: any) {
    this.navigator && this.navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  }

  navigationOptions(title?: string, headerBackImage?: React.ComponentType) {
    return {
      title,
      headerTitleStyle,
      headerStyle,
      headerTitleContainerStyle,
      headerTransparent: true,
      headerBackImage,
    };
  }
}

export default new NavService();