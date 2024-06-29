import React, { useState } from "react"
import {
  Box,
  Card,
  Button,
  TextField,
  Typography,
  Link,
  Grid,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material"
import logo from "../assets/img/logo.png"
import { NavLink } from "react-router-dom"

const Login = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "35%", mb: "25%" }}>
          <img src={logo} style={{ height: "100%" }} />
        </Box>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <Card
          sx={{
            height: "95%",
            width: 520,
            bgcolor: "secondary.main",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography variant="h4" fontWeight={700} color="initial">
            Register an account.
          </Typography>
          <Grid container rowSpacing={1} sx={{ mb: 2 }}>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                id="first_name"
                label="First Name"
                variant="filled"
                sx={{ bgcolor: "white" }}
                required
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                id="middle_name"
                label="Middle Name"
                variant="filled"
                sx={{ bgcolor: "white" }}
                required
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                id="last_name"
                label="Last Name"
                variant="filled"
                sx={{ bgcolor: "white" }}
                required
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                id="contact_no"
                label="Contact No."
                variant="filled"
                sx={{ bgcolor: "white" }}
                required
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                id="nickname"
                label="Nickname"
                variant="filled"
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormControl>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Gender"
                  variant="filled"
                  sx={{ bgcolor: "#f0f0f0 ", width: 205 }}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="no_mention">
                    I would rather not mention.
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormControl>
                <InputLabel id="demo-simple-select-label">Barangay</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Gender"
                  variant="filled"
                  sx={{ bgcolor: "#f0f0f0 ", width: 205 }}
                >
                  <MenuItem value={10}>Example</MenuItem>
                  <MenuItem value={20}>Example</MenuItem>
                  <MenuItem value={30}>Example</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                id="first_name"
                label="First Name"
                variant="filled"
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                id="pet_name"
                label="Pet Name"
                variant="filled"
                sx={{ bgcolor: "white" }}
                required
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                id="breed"
                label="Breed"
                variant="filled"
                sx={{ bgcolor: "white" }}
                required
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                id="color"
                label="Color"
                variant="filled"
                sx={{ bgcolor: "white" }}
                required
              />
            </Grid>
          </Grid>
          <Button variant="contained" size="large" sx={{ width: 240 }}>
            Register
          </Button>
          <Link component={NavLink} sx={{ color: "black" }} to="/login">
            <Typography variant="caption" color="initial">
              Already have an account? <b>Login here.</b>
            </Typography>
          </Link>
        </Card>
      </Box>
    </Box>
  )
}

export default Login
