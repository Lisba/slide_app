import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
  NavigationProp,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Webview, MultiList } from '@screens';

export type RootStackParamList = {
  Home: undefined;
  Webview: { url: string };
  MultiList: undefined;
};
export type StackNavigation = NavigationProp<RootStackParamList>;

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export function goBack() {
  navigationRef.current?.goBack();
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="MultiList" component={MultiList} />
        <Stack.Screen name="Webview" component={Webview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
