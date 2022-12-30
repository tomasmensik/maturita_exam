import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Todolist = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="To-Do List"
          subtitle="You can check your To-Do List... bla bla bla"
        />
      </Box>
    </Box>
  );
};

export default Todolist;
