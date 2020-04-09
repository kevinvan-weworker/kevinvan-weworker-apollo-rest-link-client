import gql from 'graphql-tag';

export interface IUser {
  firstName: string;
  lastName: string;
  avatarUrl: string;
  phoneNumber: number;
  address: string;
}

export interface IUsers {
  users: IUser[]
}

export const GET_USERS = gql`
  query AllUsers {
    users @rest(type: "User", path: "users") {
      firstName
      lastName
      # avatarUrl
      # phoneNumber
      # address
    }
  }
`;