import React from 'react';
import { render, screen } from '@testing-library/react-native';
import HeroSwiper from './index';
import { ApolloError } from '@apollo/client';
import { THeroSwiper } from './types';
import 'react-native';

jest.mock('react-native-swiper', () => {
  const MockSwiper = ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  );
  return MockSwiper;
});

const mockApolloError = new ApolloError({
  errorMessage: 'Error loading data',
});

const mockData: THeroSwiper['data'] = {
  blockHomeHeroSlider: {
    slide1EnableDarkBackdrop: true,
    slide1EyebrowImage: {
      __typename: 'Asset',
      url: 'https://example.com/image1.png',
      contentType: 'image/png',
    },
    slide1EyebrowText: 'Test Eyebrow Text 1',
    slide1MobileImageOrVideo: {
      __typename: 'Asset',
      url: 'https://example.com/video1.mp4',
      contentType: 'video/mp4',
    },
    slide1TargetUrl: '/test-url-1',
    slide1Title: 'Test Title 1',
    slide2EnableDarkBackdrop: false,
    slide2EyebrowImage: {
      __typename: 'Asset',
      url: 'https://example.com/image2.png',
      contentType: 'image/png',
    },
    slide2EyebrowText: 'Test Eyebrow Text 2',
    slide2MobileImageOrVideo: {
      __typename: 'Asset',
      url: 'https://example.com/video2.mp4',
      contentType: 'video/mp4',
    },
    slide2TargetUrl: '/test-url-2',
    slide2Title: 'Test Title 2',
  },
};

const defaultProps = {
  data: mockData,
  screenHeight: 600,
  screenWidth: 800,
  loading: false,
  error: undefined,
};

describe('HeroSwiper', () => {
  it('Check renders slides correctly', () => {
    render(<HeroSwiper {...defaultProps} />);
    expect(screen.getByText('Test Title 1')).toBeTruthy();
    expect(screen.getByText('Test Title 2')).toBeTruthy();
  });

  it('Check handles dark backdrop overlay', () => {
    render(<HeroSwiper {...defaultProps} />);
    const darkOverlay = screen.getAllByTestId('dark-overlay');
    expect(darkOverlay.length).toBe(1);
  });

  it('Check displays loading state correctly', () => {
    render(<HeroSwiper {...defaultProps} loading={true} />);
    expect(screen.getByText('Loading...')).toBeTruthy();
  });

  it('Check displays error state correctly', () => {
    render(<HeroSwiper {...defaultProps} error={mockApolloError} />);
    expect(
      screen.getByText('Error loading data: Error loading data'),
    ).toBeTruthy();
  });
});
