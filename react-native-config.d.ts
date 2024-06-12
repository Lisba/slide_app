declare module 'react-native-config' {
  export interface NativeConfig {
    GRAPHQL_API_ENDPOINT_HERO?: string;
    GRAPHQL_API_ENDPOINT_ANNOUNCEMENTS?: string;
    BEARER_TOKEN_HERO?: string;
    BEARER_TOKEN_ANNOUNCEMENTS?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
