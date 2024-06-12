import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#000',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#000',
    width,
    height,
    paddingLeft: 20,
  },
  text: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    width: 300,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width,
  },
  paginationBarContainer: {
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  activeBar: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    overflow: 'hidden',
  },
  inactiveBar: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  chargingLine: {
    height: '100%',
    backgroundColor: '#fff',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 38,
    fontWeight: '600',
  },
  nextButton: {
    position: 'absolute',
    top: '40%',
    right: 20,
    padding: 10,
    borderRadius: 5,
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 200,
  },
  eyebrowImage: {
    width: 190,
    height: 40,
    fontSize: 1,
    zIndex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    zIndex: 1,
  },
});
