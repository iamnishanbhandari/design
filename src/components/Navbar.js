import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import {  createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#8b5cf6',
    },
  },
});

export default function Navbar() {
   const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <ThemeProvider theme={theme}>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar color="primary">
          <IconButton
            size="large"
            edge="start"
            color=" #a78bfa"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Sidebar state={state} setState={setState} toggleDrawer={toggleDrawer}/>
    </Box>
    </ThemeProvider>

  );
}
