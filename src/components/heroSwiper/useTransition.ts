import { useRef, useCallback } from 'react';
import { Animated } from 'react-native';

type TuseTransitionProps = {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  slideCountMaxIndex: number;
  videoRefs: React.MutableRefObject<any[]>;
  intervalRef: React.MutableRefObject<NodeJS.Timeout | null>;
};

export const useTransition = ({
  activeIndex,
  setActiveIndex,
  slideCountMaxIndex,
  videoRefs,
  intervalRef,
}: TuseTransitionProps) => {
  const fadeAnimationRef = useRef(new Animated.Value(1)).current;

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleTransition = useCallback(() => {
    stopTimer();
    Animated.timing(fadeAnimationRef, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      videoRefs.current[activeIndex]?.seek(0);
      setActiveIndex((prevIndex) =>
        prevIndex >= slideCountMaxIndex ? 0 : prevIndex + 1,
      );
      Animated.timing(fadeAnimationRef, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        videoRefs.current[
          activeIndex >= slideCountMaxIndex ? 0 : activeIndex + 1
        ]?.seek(0);
      });
    });
  }, [
    activeIndex,
    fadeAnimationRef,
    slideCountMaxIndex,
    setActiveIndex,
    videoRefs,
  ]);

  return { fadeAnimationRef, handleTransition };
};
