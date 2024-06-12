import React, { useRef, useState, FC } from 'react';
import { View, Text, Animated, Pressable, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import { styles } from './styles';
import type { THeroSwiper, TSlide } from './types';
import { useSwiperTimer } from './useSwiperTimer';
import { useTransition } from './useTransition';
import {
  SLIDE_DURATION_SECONDS,
  PROGRESS_BAR_UPDATE_INTERVAL_SECONDS,
  PROGRESS_BAR_UPDATE_INTERVAL_MILISECONDS,
} from './constants';
import { SvgUri } from 'react-native-svg';

const HeroSwiper: FC<THeroSwiper> = ({
  data,
  screenHeight,
  screenWidth,
  loading,
  error,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideDataArray: TSlide[] = Object.entries(
    data?.blockHomeHeroSlider || {},
  )
    .reduce((acc: TSlide[], [key, _]) => {
      const match = key.match(/slide(\d+)MobileImageOrVideo/);
      if (match) {
        const index = parseInt(match[1], 10) - 1;
        const slide: TSlide = acc[index] ?? {};
        slide.slideEnableDarkBackdrop =
          data.blockHomeHeroSlider[`slide${index + 1}EnableDarkBackdrop`];
        slide.slideEyebrowText =
          data.blockHomeHeroSlider[`slide${index + 1}EyebrowText`];
        slide.slideTargetUrl =
          data.blockHomeHeroSlider[`slide${index + 1}TargetUrl`];
        slide.slideTargetLink =
          data.blockHomeHeroSlider[`slide${index + 1}TargetLink`];
        slide.slideTitle = data.blockHomeHeroSlider[`slide${index + 1}Title`];
        slide.slideEyebrowImageUrl =
          data.blockHomeHeroSlider[`slide${index + 1}EyebrowImage`]?.url ?? '';
        slide.slideVideoUrl =
          data.blockHomeHeroSlider[`slide${index + 1}MobileImageOrVideo`]
            ?.url ?? '';

        acc[index] = slide;
      }
      return acc;
    }, [])
    .filter(
      (slide) => slide.slideVideoUrl && slide.slideVideoUrl.includes('.mp4'),
    );

  const slideCount = slideDataArray ? slideDataArray.length : 0;
  const slideCountMaxIndex = slideCount - 1;

  const videoRefs = useRef(Array(slideCount).fill(null));
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { fadeAnimationRef, handleTransition } = useTransition({
    activeIndex,
    setActiveIndex,
    slideCountMaxIndex,
    videoRefs,
    intervalRef,
  });

  const { timer, setTimer } = useSwiperTimer({
    intervalRef,
    handleTransition,
    SLIDE_DURATION_SECONDS,
    PROGRESS_BAR_UPDATE_INTERVAL_SECONDS,
    PROGRESS_BAR_UPDATE_INTERVAL_MILISECONDS,
  });

  const handleNextPress = () => {
    setTimer(0);
    handleTransition();
  };

  const renderPagination = (index: number, total: number) => {
    return (
      <View style={styles.paginationContainer}>
        {slideDataArray.map((slideData, urlIndex) => (
          <View
            key={slideData?.slideVideoUrl}
            style={[
              styles.paginationBarContainer,
              { width: screenWidth / total - 10 },
            ]}>
            <View
              style={
                urlIndex === index ? styles.activeBar : styles.inactiveBar
              }>
              {urlIndex === index && (
                <View
                  style={{
                    ...styles.chargingLine,
                    width: `${(timer / SLIDE_DURATION_SECONDS) * 100}%`,
                  }}
                />
              )}
            </View>
          </View>
        ))}
      </View>
    );
  };

  if (loading) return <Text>{'Loading...'}</Text>;
  if (error) return <Text>{`Error loading data: ${error?.message}`}</Text>;

  return (
    <View style={[styles.container, { height: screenHeight }]}>
      <Swiper
        index={activeIndex}
        loop={false}
        renderPagination={renderPagination}
        autoplay={false}
        scrollEnabled={false}>
        {slideDataArray.map((slideData, index) => {
          return (
            <Animated.View
              key={slideData?.slideVideoUrl}
              style={[styles.slide, { opacity: fadeAnimationRef }]}>
              <Video
                source={{
                  uri: slideData?.slideVideoUrl ?? '',
                }}
                ref={(ref) => {
                  videoRefs.current[index] = ref;
                }}
                style={styles.backgroundVideo}
                repeat={false}
                resizeMode="cover"
                muted
                paused={activeIndex !== index}
              />
              {slideData?.slideEnableDarkBackdrop && (
                <View style={styles.darkOverlay} testID="dark-overlay" />
              )}
              <View style={styles.imageContainer}>
                {slideData.slideEyebrowImageUrl?.includes('.svg') ? (
                  <SvgUri
                    width="90%"
                    height="10%"
                    uri={`${slideData.slideEyebrowImageUrl}`}
                  />
                ) : (
                  <Image
                    style={styles.eyebrowImage}
                    source={{
                      uri: `${slideData.slideEyebrowImageUrl}`,
                    }}
                  />
                )}
                {slideData.slideTitle && (
                  <Text style={styles.text}>{`${slideData.slideTitle}`}</Text>
                )}
              </View>
            </Animated.View>
          );
        })}
      </Swiper>
      <Pressable style={styles.nextButton} onPress={handleNextPress}>
        <Text style={styles.nextButtonText}>{'>'}</Text>
      </Pressable>
    </View>
  );
};

export default HeroSwiper;
