import React, { useState, useEffect } from "react";

function DateToday() {
  const [today, setToday] = useState("");

  useEffect(() => {
    const getToday = () => {
      const today = new Date();
      const options = { month: "long", day: "numeric", year: "numeric" };
      const formattedDate = today.toLocaleDateString("en-US", options);
      setToday(formattedDate);
    };

    getToday();
  }, []);

  return <div>Today is: {today}</div>;
}

export default DateToday;
