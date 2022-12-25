//Importovani 'Typography' komponent nam usnadnuje pouziti font weights a font sizes.
//Importovani 'tokens' nam umoznuje pouzivat tokeny na pouzite themes.

import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

//Tato arrow Header() function nam vygeneruje header div, kde mame zastoupene 2 sekce pro title a subtitle. Obe tyto sekce maji v sobe CSS styly.
//Vyhoda teto funkce je, ze uz nemusime rucne psat CSS styly a staci ji jenom zavolat a zmenit 2 parametry (title a subtitle).

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
