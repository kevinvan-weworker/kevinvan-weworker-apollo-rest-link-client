import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_USERS, IUsers } from '../networking/users/queries/userQueries';
// import { responseResolver } from '../utils/responseResolver';

const App = (): JSX.Element => {
  // React.useEffect(() => {
  //   (async function anyNameFunction() {
  //     const restData = await responseResolver('/api/users');

  //     console.log(restData);
  //   })();
  // }, []);

  const { loading, error, data } = useQuery<IUsers[]>(GET_USERS);

  if (loading) { return <div>loading...</div>; }
  if (error || !data) { return <p>{JSON.stringify(error)}</p>; }

  console.log(data);
  return (
    <div>
      graphqllllll
    </div>
  );
}

export default App;
