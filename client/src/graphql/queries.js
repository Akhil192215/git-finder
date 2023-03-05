import { gql } from "@apollo/client";

 export const SEARCH_USERS = gql`
  query searchUsers($query: String!, $type: String!) {
    searchUsers(query: $query, type: $type) {
      id
      login
      name
      email
      avatar_url
      html_url
      bio
    }
  }
`;
