//Importovani 'Box' komponenty nam slouzi jako wrapper pro vetsinu potrebnych nastroju CSS.
//Importovani 'Typography' komponenty nam usnadnuje pouziti font weights a font sizes.
//Importovani 'useTheme' komponenty nam umozni menit barvy, typografii a mnoho dalsiho.
//Importovani 'tokens' nam umoznuje pouzivat tokeny na pouzite themes.
//Importovani 'mockDataTeam' nam umozni pouzivat nase predem predpripravene data.
//Importovani '...Icon' nam importuje ikonku.
//Importovani 'Header' komponenty nam umozni pouzivat funkce v souboru 'Header.jsx'.

import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import Header from "../../components/Header";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { Link } from "@mui/material";

//Tato arrow Students() function nam umozni vygenerovat "Students" studentu. Diky teto tabulce muze admin managovat se studenty.
//Nejprve si vytvorime nase sloupce (neboli hlavicku) a napise jednotlive nazvy.
//Pomoci rendercell() funkce vyrenderujeme jednotlive studenty a nastavime barvu podle toho, jestli jsou programatori nebo sitari.

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

const Friends = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, loading, error } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box>
      <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header
            title="Friends"
            subtitle="Here you can see your friends... bla bla bla"
          />
        </Box>
      </Box>
      <Box mt="10px" ml="20px" mr="20px">
        <Table>
          <TableHead style={{ backgroundColor: colors.blueAccent[700] }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Github</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Student</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.students.map((profile) => (
              <TableRow key={profile.id}>
                <TableCell>{profile.id}</TableCell>
                <TableCell style={{ color: colors.greenAccent[300] }}>
                  {profile.user.firstName} {profile.user.lastName}
                </TableCell>
                <TableCell>{profile.idProfile}</TableCell>
                <TableCell>
                  <Link
                    style={{ color: colors.greenAccent[300] }}
                    href={profile.profileGit}
                    target="_blank"
                  >
                    {profile.user.firstName}@github
                  </Link>
                </TableCell>
                <TableCell>{profile.user.email}</TableCell>
                <TableCell>
                  <Box
                    width="60%"
                    p="7px"
                    display="flex"
                    justifyContent="center"
                    backgroundColor={
                      profile.proClass === "PROGRAMMER"
                        ? colors.greenAccent[800]
                        : profile.proClass === "NETWORKER"
                        ? colors.greenAccent[700]
                        : colors.greenAccent[700]
                    }
                    borderRadius="4px"
                  >
                    {profile.proClass === "PROGRAMMER" && (
                      <LaptopChromebookIcon />
                    )}
                    {profile.proClass === "NETWORKER" && <NetworkCheckIcon />}
                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                      &nbsp;{profile.proClass}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter style={{ backgroundColor: colors.blueAccent[700] }}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Box>
    </Box>
  );
};

export default Friends;
