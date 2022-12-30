import { tokens } from "../theme";
import { useTheme } from "@mui/material";

const DateDeadline = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let date = "January 12, 2023";

  return (
    <div style={{ display: "flex", flexDirection: "row", fontSize: "20px" }}>
      <div style={{ fontWeight: "bold", color: colors.grey[100] }}>
        Deadline is:&nbsp;
      </div>
      <div style={{ color: colors.greenAccent[400] }}>{date}</div>
    </div>
  );
};

export default DateDeadline;
