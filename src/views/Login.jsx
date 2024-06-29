import React, { useState } from "react"
import { Box, Card, Button, TextField, Typography, Link } from "@mui/material"
import logo from "../assets/img/logo.png"
import { NavLink } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

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
            width: 480,
            bgcolor: "secondary.main",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Box sx={{ height: "30%", mb: 4 }}>
            <img src={logo} style={{ height: "100%" }} />
          </Box>
          <TextField
            id="username"
            label="Username"
            variant="filled"
            sx={{ bgcolor: "white", width: 240 }}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            variant="filled"
            sx={{ bgcolor: "white", width: 240 }}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <Button variant="contained" size="large" sx={{ width: 240 }}>
            Login
          </Button>
          <Link component={NavLink} sx={{ color: "black" }} to="/register">
            <Typography variant="caption" color="initial">
              Don't have an account? <b>Register here.</b>
            </Typography>
          </Link>
        </Card>
      </Box>
    </Box>
  )
}

export default Login
