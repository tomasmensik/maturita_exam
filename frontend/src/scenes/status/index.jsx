import { Box } from "@mui/material";
import Header from "../../components/Header";
import StatusChart from "../../components/StatusChart";

const Status = () => {
  return (
    <Box m="20px">
      <Header
        title="Status"
        subtitle="Here you can see your progress with your project... bla bla bla"
      />
      <Box height="75vh">
        <StatusChart />
      </Box>
    </Box>
  );
};

export default Status;
