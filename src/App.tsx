import 'react-native-gesture-handler';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@config';
import Navigation from './navigation';
import { NativeModules } from 'react-native';

if (__DEV__) {
  require('../ReactotronConfig');
}

console.log(NativeModules.Counter);
NativeModules.Counter.increment();
NativeModules.Counter.printCount((value) => console.log('value: ', value));
console.log(NativeModules.Counter.getConstants());

const App = (): React.JSX.Element => {
  return (
    <ApolloProvider client={apolloClient}>
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
