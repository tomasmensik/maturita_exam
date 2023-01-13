import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const GET_USERS = gql`
<<<<<<< HEAD
  query {
    hardwareProjectCount
  }
=======
  query{
  hardwareProjectCount
}
>>>>>>> f74c781c7cd33951658e07101a8803c955ca629d
`;

function TotalHardware() {
  const { data, loading, error } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return parseInt(data.hardwareProjectCount, 10);
}

export default TotalHardware;
