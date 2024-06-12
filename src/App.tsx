import 'react-native-gesture-handler';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@config';
import Navigation from './navigation';

const App = (): React.JSX.Element => {
  return (
    <ApolloProvider client={apolloClient}>
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
