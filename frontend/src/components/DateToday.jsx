import React, { useState, useEffect } from "react";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

function DateToday() {
  const [today, setToday] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const getToday = () => {
      const today = new Date();
      const options = { month: "long", day: "numeric", year: "numeric" };
      const formattedDate = today.toLocaleDateString("en-US", options);
      setToday(formattedDate);
    };

    getToday();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row", fontSize: "20px" }}>
      <div style={{ fontWeight: "bold", color: colors.grey[100] }}>
        Today is:&nbsp;
      </div>
      <div style={{ color: colors.greenAccent[400] }}>{today}</div>
    </div>
  );
}

export default DateToday;
