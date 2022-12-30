//Importovani 'useState' komponenty umoznuje vyvojarovi snadno aktualizovat hodnotu konstanty pomoci funkce.
//Importovani 'ProSidebar', 'Menu', 'MenuItem' komponent nam poskytuje sadu funkci pro vytvareni vysokourovnove a prizpusobitelne "side" navigace.
//Importovani 'Box' komponenty nam slouzi jako wrapper pro vetsinu potrebnych nastroju CSS.
//Importovani 'IconButton' komponenty nam umozni pouzivat ikonku vytistenou na widgetu, ktera reaguje na dotyky.
//Importovani 'Typography' komponenty nam usnadnuje pouziti font weights a font sizes.
//Importovani 'useTheme' komponenty nam umozni menit barvy, typografii a mnoho dalsiho.
//Importovani 'Link' kompnenty nam umozni routovat mezi strankami.
//Importovani 'tokens' nam umoznuje pouzivat tokeny na pouzite themes.
//Importovani '...Icon' nam importuje ikonku.

import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccessibleIcon from "@mui/icons-material/Accessible";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import DashboardIcon from "@mui/icons-material/Dashboard";

//Tato arrowe Item() function nam umozni preklikavat mezi jednotlivymi itemvy v side navigaci.
//Nakliknuty item zmeni barvu a presmeruje nas na spravy route path.

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

//Tato arrow Sidebar() function nam vygeneruje jednotlive itemy na side (bocni) navigaci. Kazdy tento item mas sve CSS styly a nazvy skryte v parametrech promenne.
//Je rozdelen na default Dashboard a dalsi 3 sekce, kde kazda z nich ma sve 3 dalsi podsekce.

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  let adminAtTheMoment = false;

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  {adminAtTheMoment === true ? "ADMIN" : "STUDENT"}
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={
                    adminAtTheMoment === true
                      ? `../../assets/admin.png`
                      : `../../assets/user.png`
                  }
                  //Tady se musí dodělat src (fotky se musí vložit do build/assets/)
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {adminAtTheMoment === true ? "Marek Lučný" : "Tomáš Menšík"}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  {
                    adminAtTheMoment === true
                      ? "Admin Profile"
                      : "Student Profile"
                    //Tady se musí nastavit "Admin Profile" pro admina a "Programmer/Networker" pro studenta
                  }
                  <Item
                    title="TEMPORARY ITEM (login)"
                    to="/app/login"
                    icon={<AccessibleIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title={adminAtTheMoment === true ? "Dashboard" : "Project"}
              to="/app/project"
              icon={
                adminAtTheMoment === true ? (
                  <DashboardIcon />
                ) : (
                  <DesktopWindowsOutlinedIcon />
                )
              }
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Main
            </Typography>
            <Item
              title={adminAtTheMoment === true ? "Students" : "Friends"}
              to={adminAtTheMoment === true ? "app/students" : "app/friends"}
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Chat"
              to="/app/chat"
              icon={<ChatOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Status"
              to="/app/status"
              icon={<AutoGraphIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile"
              to="/app/profile"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/app/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/app/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              {adminAtTheMoment === true ? "Charts" : "Tools"}
            </Typography>
            <Item
              title={adminAtTheMoment === true ? "Bar Chart" : "To-Do List"}
              to={adminAtTheMoment === true ? "app/bar" : "app/todolist"}
              icon={
                adminAtTheMoment === true ? (
                  <BarChartOutlinedIcon />
                ) : (
                  <CheckBoxOutlinedIcon />
                )
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={adminAtTheMoment === true ? "Pie Chart" : "Issues"}
              to={adminAtTheMoment === true ? "app/pie" : "app/issues"}
              icon={
                adminAtTheMoment === true ? (
                  <PieChartOutlineOutlinedIcon />
                ) : (
                  <BorderColorOutlinedIcon />
                )
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={adminAtTheMoment === true ? "Line Chart" : "README.md"}
              to={adminAtTheMoment === true ? "app/line" : "app/readme"}
              icon={
                adminAtTheMoment === true ? (
                  <TimelineOutlinedIcon />
                ) : (
                  <StickyNote2OutlinedIcon />
                )
              }
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
