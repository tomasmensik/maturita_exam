import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';


const GET_USERS = gql`
  query{
  hardwareProjectCount
}

`;

function TotalHardware() {
  const { data, loading, error } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (<div>hardwarových projektů: {data.hardwareProjectCount}</div>);
}

export default TotalHardware;