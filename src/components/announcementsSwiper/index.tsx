import React, { useState, FC } from 'react';
import Swiper from 'react-native-swiper';
import { Text, View, Pressable } from 'react-native';
import { StackNavigation } from '@navigation';
import { useNavigation } from '@react-navigation/native';
import type { TAnnouncementSwiper, TSlideData } from './types';
import { styles } from './styles';

const AnnouncementSwiper: FC<TAnnouncementSwiper> = ({
  data,
  screenHeight,
  loading,
  error,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation<StackNavigation>();

  const getBackgroundColor = () => {
    if (data && data.announcementCollection.items.length > 0) {
      const currentItem = data.announcementCollection.items[currentIndex];
      return currentItem?.backgroundColor || '#aaa';
    }
    return '#aaa';
  };

  const handleSlidePress = (targetUrl: string) => {
    if (targetUrl) {
      navigation.navigate('Webview', { url: targetUrl });
    }
  };

  if (loading) {
    return <Text>{'Loading...'}</Text>;
  }

  if (error) {
    return <Text>{`Error loading data: ${error?.message}`}</Text>;
  }

  return (
    <View
      style={[
        styles.swiperContainer,
        {
          height: screenHeight,
          backgroundColor: getBackgroundColor(),
        },
      ]}>
      <Swiper
        showsButtons={true}
        showsPagination={false}
        onIndexChanged={setCurrentIndex}
        index={currentIndex}
        prevButton={<Text style={styles.prevButton}>{'<'}</Text>}
        nextButton={<Text style={styles.nextButton}>{'>'}</Text>}>
        {data?.announcementCollection?.items.map((slideData: TSlideData) => {
          return (
            <Pressable
              style={styles.button}
              key={slideData?.ctaUrl}
              onPress={() => handleSlidePress(slideData?.ctaUrl)}>
              {slideData?.intro ? (
                <View style={styles.textContainer}>
                  <Text style={styles.intro}>{slideData?.intro}</Text>
                </View>
              ) : null}
              {slideData?.message ? (
                <View style={styles.textContainer}>
                  <Text style={styles.message}>{slideData?.message}</Text>
                </View>
              ) : null}
              {slideData?.ctaLabel ? (
                <View style={styles.textContainer}>
                  <Text style={styles.ctaLabel}>{slideData?.ctaLabel}</Text>
                </View>
              ) : null}
            </Pressable>
          );
        })}
      </Swiper>
    </View>
  );
};

export default AnnouncementSwiper;
