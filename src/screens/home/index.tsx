import React, { useState, useEffect } from 'react';
import { AnnouncementsSwiper, HeroSwiper } from '@components';
import { useQuery } from '@apollo/client';
import {
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { heroSliderQuery, announcementQuery } from '@api';
import type { TstatusBarStyle } from './types';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Home: React.FC = () => {
  const [heroCarouselHeight, setHeroCarouselHeight] = useState(
    (screenHeight / 100) * 90,
  );
  const [announcementsCarouselHeight, setAnnouncementsCarouselHeight] =
    useState((screenHeight / 100) * 10);
  const isDarkMode = useColorScheme() === 'dark';

  const statusBarStyle: TstatusBarStyle = {
    barColor: isDarkMode ? 'light-content' : 'dark-content',
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  const {
    loading: heroSliderLoading,
    error: heroSliderError,
    data: heroSliderData,
  } = useQuery(heroSliderQuery, {
    context: { clientName: 'heroApi' },
  });

  const {
    loading: announcementLoading,
    error: announcementError,
    data: announcementData,
  } = useQuery(announcementQuery, {
    context: { clientName: 'announcementsApi' },
  });

  useEffect(() => {
    const totalHeight = screenHeight - 90;
    setHeroCarouselHeight((totalHeight / 100) * 88);
    setAnnouncementsCarouselHeight((totalHeight / 100) * 12);
  }, []);

  return (
    <SafeAreaView style={statusBarStyle}>
      <StatusBar
        barStyle={statusBarStyle.barColor}
        backgroundColor={statusBarStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={statusBarStyle}>
        <View>
          <AnnouncementsSwiper
            data={announcementData}
            screenHeight={announcementsCarouselHeight}
            loading={announcementLoading}
            error={heroSliderError}
          />
          <HeroSwiper
            data={heroSliderData}
            screenWidth={screenWidth}
            screenHeight={heroCarouselHeight}
            loading={heroSliderLoading}
            error={announcementError}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
