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
        {data.profiles.map(profile => (
          <li key={profile.id}>
            {profile.idProfile}: {profile.profileGit} ({profile.profileTime})
            {profile.profileProject.map(project => (
              <div key={project.proName}>
                <h3>{project.proName}</h3>
                <p>{project.proDescription}</p>
              </div>
            ))}
          </li>
        ))}
      </ul>
    );
    }

export default UserList;