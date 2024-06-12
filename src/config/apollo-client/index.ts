import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
import Config from 'react-native-config';

const heroApi = new HttpLink({
  uri: Config.GRAPHQL_API_ENDPOINT_HERO,
  headers: {
    Authorization: `Bearer ${Config.BEARER_TOKEN_HERO}`,
  },
});

const announcementsApi = new HttpLink({
  uri: Config.GRAPHQL_API_ENDPOINT_ANNOUNCEMENTS,
  headers: {
    Authorization: `Bearer ${Config.BEARER_TOKEN_ANNOUNCEMENTS}`,
  },
});

const link = split(
  (operation) => operation.getContext().clientName === 'heroApi',
  heroApi,
  announcementsApi,
);

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
