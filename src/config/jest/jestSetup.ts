import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-video', () => 'Video');
jest.mock('react-native-config', () => ({
  GRAPHQL_API_ENDPOINT_HERO: 'https://example.com/hero-api',
  BEARER_TOKEN_HERO: 'mocked-hero-token',
  GRAPHQL_API_ENDPOINT_ANNOUNCEMENTS: 'https://example.com/announcements-api',
  BEARER_TOKEN_ANNOUNCEMENTS: 'mocked-announcements-token',
}));
