import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import genericDigioLogo from "../assets/generic-logo-hi.png";

const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        style={{
          backgroundColor: "linearGradient(to bottom right, #090977, #00d4ff)",
        }}
      >
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Sign Document
          </Typography>
          <img
            src={genericDigioLogo}
            alt='logo'
            height='50px'
            width='130px'
            style={{ padding: "10px" }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
