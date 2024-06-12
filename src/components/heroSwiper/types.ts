import { ApolloError } from '@apollo/client';

export type THeroSwiper = {
  data: any;
  error: ApolloError | undefined;
  loading: boolean;
  screenWidth: number;
  screenHeight: number;
};

export type TAsset = {
  __typename?: 'Asset';
  url?: string | null;
  contentType?: string | null;
};

export type TSlide = {
  slideVideoUrl: string;
  slideEnableDarkBackdrop: boolean;
  slideEyebrowText: string;
  slideTargetUrl: string;
  slideTitle: string;
  slideEyebrowImageUrl: string;
  slideTargetLink: string;
};
