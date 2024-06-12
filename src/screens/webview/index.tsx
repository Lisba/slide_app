// WebViewScreen.tsx
import React, { FC } from 'react';
import { WebView } from 'react-native-webview';
import type { TWebview } from './types';

const Webview: FC<TWebview> = ({ route }) => {
  const { url } = route.params;
  return <WebView source={{ uri: url }} />;
};

export default Webview;
