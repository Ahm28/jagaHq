import { gql } from '@apollo/client';

export const GET_EPISODES = gql`
  query ($page: Int) {
    episodes (page: $page) {
      results {
        id
        name
        air_date
        episode
        characters {
          name
          image
          id
        }
      }
    }
  }
`;

export const GET_DETAIL_EPISODE = gql`
  query ($page: Int, $episode: String) {
    episodes (page: $page, filter: {episode: $episode}) {
      results {
        id
        name
        air_date
        episode
        characters {
          id
          name
          status
          species
          type
          gender
          image
          created
        }
      }
    }
  }
`