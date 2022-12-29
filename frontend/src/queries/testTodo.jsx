import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';


const GET_USERS = gql`
  query{
    profiles{
      id
      profileGit
      proClass
      user{
        id
        email
        firstName
        lastName
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
      {data.profiles.map(profile => (
        <li key={profile.id}>
          {profile.id}: {profile.profileGit} ({profile.proClass})
          <div>
            <h3>{profile.user.lastName}</h3>
            <p>{profile.user.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default UserList;