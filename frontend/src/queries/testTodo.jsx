import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';



const GET_USERS = gql`
  query{
    profiles{
      id
      idProfile
      profileGit
      profileTime
      profileProject{
        proName
        proDescription
      }
    }
  }
`;

function UserList() {
  const { data, loading, error } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.profiles.map(profiles => (
        <li key={profiles.id}>{profiles.idProfile}</li>
      ))}
    </ul>
  );
}

export default UserList;