import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  swiperContainer: {
    flex: 1,
    position: 'relative',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: 300,
  },
  ctaLabel: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  message: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  },
  intro: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
    fontStyle: 'italic',
  },
  nextButton: {
    position: 'absolute',
    right: 2,
    top: '50%',
    transform: [{ translateY: -15 }],
    color: '#fff',
    fontSize: 30,
    fontWeight: '200',
  },
  prevButton: {
    position: 'absolute',
    left: 2,
    top: '50%',
    transform: [{ translateY: -15 }],
    color: '#fff',
    fontSize: 30,
    fontWeight: '200',
  },
});
