import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";

const Register = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account!
          </Typography>
        </Grid>
        <form>
          <Grid container style={{ marginTop: 5 }}>
            <Grid item xs={8}>
              <TextField
                label="Nickname"
                placeholder="XXXMaster420"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField label="ID" placeholder="it1920" fullWidth required />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: 5 }}>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                placeholder="Tomáš"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                placeholder="Menšík"
                fullWidth
                required
              />
            </Grid>
          </Grid>

          <FormControl
            style={{
              marginTop: 5,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TextField
              label="Password"
              placeholder="Enter your password"
              fullWidth
              required
            />
          </FormControl>

          <FormControl
            style={{
              marginTop: 5,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TextField
              label="Email"
              placeholder="xxx@gmail.cz"
              fullWidth
              required
            />
          </FormControl>

          <FormControl
            style={{
              marginTop: 5,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TextField
              label="Github"
              placeholder="github.com/xxx"
              fullWidth
              required
            />
          </FormControl>

          <FormControl
            style={{ marginTop: 5, display: "flex", justifyContent: "center" }}
          >
            <TextField
              label="Bio"
              placeholder="Hi, I'm a student!"
              fullWidth
              multiline // enable multiple lines
              rows={3} // set number of rows to 5
            />
          </FormControl>

          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Student</FormLabel>
            <RadioGroup
              aria-label="student"
              name="student"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="programmer"
                control={<Radio />}
                label="Programmer"
              />
              <FormControlLabel
                value="networker"
                control={<Radio />}
                label="Networker"
              />
            </RadioGroup>
          </FormControl>

          <FormControl
            style={{ marginTop: 5, display: "flex", justifyContent: "center" }}
          >
            <Input
              type="file"
              label="Profile Picture"
              placeholder="Enter your github"
              fullWidth
              required
            />
          </FormControl>

          <FormControl
            style={{ marginTop: 5, display: "flex", justifyContent: "center" }}
          >
            <InputLabel htmlFor="birthdate"></InputLabel>
            <Input type="date" id="birthdate" fullWidth required />
          </FormControl>

          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Register;
