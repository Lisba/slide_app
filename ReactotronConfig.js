import Reactotron from 'reactotron-react-native';

Reactotron.setAsyncStorageHandler()
  .configure({
    name: 'React Native Slider App',
  })
  .useReactNative({
    networking: {
      ignoreUrls: false,
    },
    editor: false,
    errors: { veto: (stackFrame) => false },
    overlay: false,
  })
  .connect();
