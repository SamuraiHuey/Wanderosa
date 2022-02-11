import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      itinerary {
        _id
        day
        location
        morn
        noon
        eve
        username
      }
    }
  }
`;

export const QUERY_ITINERARY = gql`
  query itinerary($username: String) {
    itinerary(username: $username) {
      _id
      day
      location
      morn
      noon
      eve
      username
    }
  }
`;