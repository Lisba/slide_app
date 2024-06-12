import { gql } from '@apollo/client';

export const announcementQuery = gql`
  query {
    announcementCollection {
      items {
        backgroundColor
        ctaLabel
        ctaUrl
        intro
        message
      }
    }
  }
`;
