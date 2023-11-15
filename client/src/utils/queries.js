import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query Me {
    me {
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
