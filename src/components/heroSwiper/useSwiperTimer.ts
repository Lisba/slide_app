import { useState, useEffect } from 'react';

type TuseSwiperTimerProps = {
  intervalRef: React.MutableRefObject<NodeJS.Timeout | null>;
  handleTransition: () => void;
  SLIDE_DURATION_SECONDS: number;
  PROGRESS_BAR_UPDATE_INTERVAL_SECONDS: number;
  PROGRESS_BAR_UPDATE_INTERVAL_MILISECONDS: number;
};

export const useSwiperTimer = ({
  intervalRef,
  handleTransition,
  SLIDE_DURATION_SECONDS,
  PROGRESS_BAR_UPDATE_INTERVAL_SECONDS,
  PROGRESS_BAR_UPDATE_INTERVAL_MILISECONDS,
}: TuseSwiperTimerProps) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev >= SLIDE_DURATION_SECONDS) {
          handleTransition();
          return 0;
        }
        return prev + PROGRESS_BAR_UPDATE_INTERVAL_SECONDS;
      });
    }, PROGRESS_BAR_UPDATE_INTERVAL_MILISECONDS);
    return () => clearInterval(intervalRef.current ?? 0);
  }, [handleTransition]);

  return { timer, setTimer };
};
