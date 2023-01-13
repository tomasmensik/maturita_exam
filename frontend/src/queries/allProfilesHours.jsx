import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useState, useEffect } from "react";

const GET_PROFILES = gql`
  query {
    profiles {
      id
      profileTimeSpend {
        month
        time
      }
    }
  }
`;

function Hours() {
  const { loading, error, data } = useQuery(GET_PROFILES);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    if (data) {
      data.profiles.forEach((profile) => {
        profile.profileTimeSpend.forEach((timeSpend) => {
          setTotalTime((prevTotalTime) => prevTotalTime + timeSpend.time);
        });
      });
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return totalTime;
}

export default Hours;
