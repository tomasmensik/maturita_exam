import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@mui/icons-material/Send";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: "100%",
    height: "75vh",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "55vh",
    overflowY: "auto",
  },
});

const Chat = () => {
  const classes = useStyles();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let adminAtTheMoment = true;

  return (
    <Box>
      <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Chat" subtitle="You can chat here... bla bla bla" />
        </Box>
      </Box>
      <Box
        style={{
          marginTop: "20px",
          marginLeft: "50px",
          marginRight: "50px",
        }}
      >
        <Grid
          style={{ backgroundColor: colors.primary[400], borderRadius: "10px" }}
          container
          className={classes.chatSection}
        >
          <Grid item xs={3} className={classes.borderRight}>
            <List>
              <ListItem key="id">
                <ListItemIcon>
                  <Avatar
                    alt="id"
                    src={
                      adminAtTheMoment === true
                        ? "../../../assets/ML.png"
                        : "../../../assets/tm.png"
                    }
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    adminAtTheMoment === true ? "Marek Lučný" : "Tomáš Menšík"
                  }
                ></ListItemText>
              </ListItem>
            </List>
            <Divider />
            <Grid item xs={12} style={{ padding: "10px" }}>
              <TextField
                id="outlined-basic-email"
                label="Search"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Divider />
            <List>
              <ListItem key="id">
                <ListItemIcon>
                  <Avatar
                    alt="id"
                    src={
                      adminAtTheMoment === true
                        ? "../../../assets/PG.png"
                        : "../../../assets/hs.png"
                    }
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    adminAtTheMoment === true ? "Petr Grussmann" : "Jan Slivka"
                  }
                ></ListItemText>
                <ListItemText secondary="online" align="right"></ListItemText>
              </ListItem>
              <ListItem key="id">
                <ListItemIcon>
                  <Avatar
                    alt="id"
                    src={
                      adminAtTheMoment === true
                        ? "../../../assets/HR.png"
                        : "../../../assets/mk.png"
                    }
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    adminAtTheMoment === true
                      ? "Hana Rohanová"
                      : "Martin Kavala"
                  }
                ></ListItemText>
              </ListItem>
              <ListItem key="id">
                <ListItemIcon>
                  <Avatar
                    alt="id"
                    src={
                      adminAtTheMoment === true
                        ? "../../../assets/MG.png"
                        : "../../../assets/tf.png"
                    }
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    adminAtTheMoment === true
                      ? "Marcel Godovský"
                      : "Tomáš Fryčka"
                  }
                ></ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={9}>
            <List>
              <ListItem key="id">
                <ListItemIcon>
                  <Avatar
                    alt="id"
                    src={
                      adminAtTheMoment === true
                        ? "../../../assets/PG.png"
                        : "../../../assets/hs.png"
                    }
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    adminAtTheMoment === true ? "Petr Grussmann" : "Jan Slivka"
                  }
                ></ListItemText>
                <ListItemText secondary="online" align="right"></ListItemText>
              </ListItem>
            </List>
            <Divider />
            <List className={classes.messageArea}>
              <ListItem key="1">
                <Grid container>
                  <Grid item xs={12}>
                    <ListItemText
                      align="right"
                      primary={
                        adminAtTheMoment === true
                          ? "Mohl bys mi přínést TP-LINK TL-SG105 Switch dolů do učebny?"
                          : "projekt XDXDXD"
                      }
                    ></ListItemText>
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText
                      align="right"
                      secondary="09:30"
                    ></ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem key="2">
                <Grid container>
                  <Grid item xs={12}>
                    <ListItemText
                      align="left"
                      primary={
                        adminAtTheMoment === true
                          ? "testoviny 100krat jinak 😄"
                          : "dokumentace XDXDXD"
                      }
                    ></ListItemText>
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText align="left" secondary="09:31"></ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem key="3">
                <Grid container>
                  <Grid item xs={12}>
                    <ListItemText
                      align="right"
                      primary={
                        adminAtTheMoment === true
                          ? ":)"
                          : "highway mad comfy rn"
                      }
                    ></ListItemText>
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText
                      align="right"
                      secondary="10:30"
                    ></ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
            <Divider />
            <Grid container style={{ padding: "20px" }}>
              <Grid item xs={11}>
                <TextField
                  id="outlined-basic-email"
                  label="Type Something"
                  fullWidth
                />
              </Grid>
              <Grid xs={1} align="right">
                <Fab color="primary" aria-label="add">
                  <SendIcon />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Chat;
