import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`


export const ADD_DAY = gql`
mutation addDay($day: String!, $location: String!, $morn: String, $noon: String, $eve: String) {
  addDay(day: $day, location: $location, morn: $morn, noon: $noon, eve: $eve) {
      _id
      day
      location
      morn
      noon
      eve
      username
  }
}
`