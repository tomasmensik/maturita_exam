import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockComments } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatusChart from "../../components/StatusChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import PieChart from "../../components/PieChart";
import DateToday from "../../components/DateToday";
import DateDeadline from "../../components/DateDeadline";
import Person2Icon from "@mui/icons-material/Person2";
import Hours from "../../queries/allProfilesHours";
import AllProfiles from "../../queries/totalProfiles";
import { DataGrid } from "@mui/x-data-grid";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { Grid } from "@mui/material";
import { Link } from "@mui/material";

const GET_USERS = gql`
  query {
    students(isAdmin: false) {
      id
      profileGit
      proClass
      idProfile
      isAdmin
      user {
        id
        email
        firstName
        lastName
      }
    }
  }
`;

const Project = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let numberOfDaysLeft = 13;
  const { data, loading, error } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PROJECT" subtitle="Welcome to your project" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 12"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt="25px"
          >
            <Typography variant="h1" fontWeight="600" color={colors.grey[100]}>
              GraphIT
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={3}>
              <Grid container justify="center">
                <Grid item>
                  <Box>
                    <Typography
                      variant="h3"
                      fontWeight="600"
                      color={colors.grey[100]}
                      align="center"
                    >
                      Project Members
                    </Typography>
                    <TableBody>
                      {data.students.map((profile) => (
                        <TableRow key={profile.id}>
                          <TableCell
                            style={{ color: colors.greenAccent[300] }}
                            align="center"
                          >
                            {profile.user.firstName} {profile.user.lastName}
                          </TableCell>
                          <TableCell align="center">
                            {profile.idProfile}
                          </TableCell>
                          <TableCell align="center">
                            {profile.user.email}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container justify="center">
                <Grid item>
                  <Box>
                    <Typography
                      variant="h3"
                      fontWeight="600"
                      color={colors.grey[100]}
                      align="center"
                    >
                      Project Members
                    </Typography>
                    <TableBody>
                      {data.students.map((profile) => (
                        <TableRow key={profile.id}>
                          <TableCell
                            style={{ color: colors.greenAccent[300] }}
                            align="center"
                          >
                            {profile.user.firstName} {profile.user.lastName}
                          </TableCell>
                          <TableCell align="center">
                            {profile.idProfile}
                          </TableCell>
                          <TableCell align="center">
                            {profile.user.email}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container justify="center">
                <Grid item>
                  <Box>
                    <Typography
                      variant="h3"
                      fontWeight="600"
                      color={colors.grey[100]}
                      align="center"
                    >
                      Project Members
                    </Typography>
                    <TableBody>
                      {data.students.map((profile) => (
                        <TableRow key={profile.id}>
                          <TableCell
                            style={{ color: colors.greenAccent[300] }}
                            align="center"
                          >
                            {profile.user.firstName} {profile.user.lastName}
                          </TableCell>
                          <TableCell align="center">
                            {profile.idProfile}
                          </TableCell>
                          <TableCell align="center">
                            {profile.user.email}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <Typography
                  variant="h3"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Deadline
                </Typography>
                <Box>
                  <Box>
                    <DateToday style={{ fontSize: "50px" }} />
                    <DateDeadline style={{ fontSize: "50px" }} />
                    <Typography
                      variant="h5"
                      fontWeight="400"
                      sx={{ marginTop: "30px" }}
                    >
                      You have exactly{" "}
                      <Box fontWeight="900" style={{ display: "inline-block" }}>
                        {numberOfDaysLeft}
                      </Box>
                      &nbsp;{numberOfDaysLeft == 1 ? "day" : "days"} left!
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Projects
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              ></Typography>
            </Box>
          </Box>
          <Box height="300px" m="-20px 0 0 0">
            <PieChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Projects
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              ></Typography>
            </Box>
          </Box>
          <Box height="300px" m="-20px 0 0 0">
            <PieChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Projects
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              ></Typography>
            </Box>
          </Box>
          <Box height="300px" m="-20px 0 0 0">
            <PieChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
