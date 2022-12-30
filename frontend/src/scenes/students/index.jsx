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
import { mockDataTeam } from "../../data/mockData";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import Header from "../../components/Header";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

//Tato arrow Students() function nam umozni vygenerovat "Students" studentu. Diky teto tabulce muze admin managovat se studenty.
//Nejprve si vytvorime nase sloupce (neboli hlavicku) a napise jednotlive nazvy.
//Pomoci rendercell() funkce vyrenderujeme jednotlive studenty a nastavime barvu podle toho, jestli jsou programatori nebo sitari.

const GET_USERS = gql`
  query {
    profiles {
      id
      profileGit
      proClass
      idProfile
      user {
        id
        email
        firstName
        lastName
      }
    }
  }
`;

/*
const Students = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, loading, error } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Table>
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Git Profile</TableCell>
        <TableCell>Class</TableCell>
        <TableCell>Last Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Student</TableCell>

      </TableRow>
    </TableHead>
    <TableBody>
      {data.profiles.map(profile => (
        <TableRow key={profile.id}>
          <TableCell>{profile.id}</TableCell>
          <TableCell>{profile.user.firstName} {profile.user.lastName}</TableCell>
          <TableCell>{profile.idProfile}</TableCell>
          <TableCell>{profile.profileGit}</TableCell>
          <TableCell>{profile.user.email}</TableCell>
          <TableCell>{profile.proClass}</TableCell>

        </TableRow>
      ))}
    </TableBody>
  </Table>
  
    );

}

export default Students;
*/

const Students = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "github",
      headerName: "Github",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "student",
      headerName: "Student",
      flex: 1,
      renderCell: ({ row: { student } }) => {
        return (
          <Box
            width="60%"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              student === "Programmer"
                ? colors.greenAccent[800]
                : student === "Networker"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {student === "Programmer" && <LaptopChromebookIcon />}
            {student === "Networker" && <NetworkCheckIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {student}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Students"
        subtitle="Managing the students... bla bla bla"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Students;
