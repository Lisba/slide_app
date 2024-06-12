import { ApolloError } from '@apollo/client';

export type TAnnouncementSwiper = {
  data: any;
  error: ApolloError | undefined;
  loading: boolean;
  screenHeight: number;
};

export type TSlideData = {
  ctaUrl: string;
  intro: string;
  message: string;
  ctaLabel: string;
};
