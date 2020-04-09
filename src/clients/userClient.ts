import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { RestLink } from 'apollo-link-rest';

import { setAuthHeaderLink } from './links/authLink';

const cache = new InMemoryCache();
const restLink = new RestLink({ uri: "http://localhost:5000/api/" });

export const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    setAuthHeaderLink,
    restLink
  ])
});