import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useState, useEffect } from 'react';
const GET_TOTAL_PROFILE_TIME_PER_MONTH = gql`
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

function TotalTimePerMonth() {
  const { loading, error, data } = useQuery(GET_TOTAL_PROFILE_TIME_PER_MONTH);
  const [totalTimePerMonthPerProfile, setTotalTimePerMonthPerProfile] = useState({});

  useEffect(() => {
    if (data) {
      data.profiles.forEach((profile) => {
        const totalTimePerMonth = {};
        profile.profileTimeSpend.forEach((timeSpend) => {
          const { month, time } = timeSpend;
          if (!totalTimePerMonth[month]) {
            totalTimePerMonth[month] = time;
          } else {
            totalTimePerMonth[month] += time;
          }
        });
        setTotalTimePerMonthPerProfile((prevTotalTimePerMonthPerProfile) => ({
          ...prevTotalTimePerMonthPerProfile,
          [profile.id]: totalTimePerMonth,
        }));
      });
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {Object.keys(totalTimePerMonthPerProfile).map((profileId) => (
        <div key={profileId}>
          Profile {profileId}:
          {Object.keys(totalTimePerMonthPerProfile[profileId]).map((month) => (
            <div key={month}>
              {month}: {totalTimePerMonthPerProfile[profileId][month]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TotalTimePerMonth;
