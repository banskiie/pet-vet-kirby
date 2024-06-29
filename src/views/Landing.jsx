import React from "react"
import { Box, Typography, Button } from "@mui/material"
import { NavLink } from "react-router-dom"
import logo from "../assets/img/logo.png"

const Landing = () => {
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
        <Box sx={{ height: "35%" }}>
          <img src={logo} style={{ height: "100%" }} alt="" />
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            width: "80%",
            pb: "15%",
            fontWeight: 500,
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit optio
          aperiam architecto facilis porro quaerat nesciunt quae hic, in
          perferendis aliquid repellendus est atque at! Accusamus officia
          dolorem id magnam perspiciatis sapiente doloribus error commodi
          similique magni? Architecto delectus earum, dolore cupiditate qui
          optio dignissimos necessitatibus iure, cum reprehenderit numquam!
        </Typography>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          bgcolor: "secondary.main",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          padding: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignContent: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            component={NavLink}
            to="/login"
            size="large"
            sx={{ width: "25%" }}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
          <Button
            component={NavLink}
            to="/register"
            size="large"
            sx={{ width: "25%" }}
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Landing
