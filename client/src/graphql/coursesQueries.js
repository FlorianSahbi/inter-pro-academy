import gql from "graphql-tag";

export const GET_COURSES = gql`
  query {
    courses {
      id
      name
      description
      category {
        name
        icon
        color
      }
    }
  }
`;
