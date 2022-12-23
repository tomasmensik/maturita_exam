//Importovani 'Box' komponenty nam slouzi jako wrapper pro vetsinu potrebnych nastroju CSS.
//Importovani 'Header' komponenty nam umozni pouzivat funkce v souboru 'Header.jsx'.

import { Box } from "@mui/material";
import Header from "../../components/Header";

//Tato arrow Dashboard() funkce nam vygeneruje Dashboard "nadpis" na hlavni strance. Pouzijeme tu Box div, abychom mohli provest nutny grid layout.
//Pote pouzijeme Header div a urcime jenom 'title' a 'subtitle', protoze funkce v 'Header.jsx' potrebuje tyto parametry. Vice v 'Header.jsx'.

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="DASHBOARD"
          subtitle="Jeste nevim, jestli mam psat v cz nebo eng."
        ></Header>
      </Box>
    </Box>
  );
};

export default Dashboard;
