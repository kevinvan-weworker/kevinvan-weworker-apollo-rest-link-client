import { setContext } from 'apollo-link-context';

export const setAuthHeaderLink = setContext((_, { headers, ...rest }) => {
  const requestHeaders = {
    ...headers,
  };

  requestHeaders.Authorization = `Bearer sOmEToKeN`;

  return {
    ...rest,
    headers: requestHeaders,
  };
});