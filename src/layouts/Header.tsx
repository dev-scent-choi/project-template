import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{ width: { sm: `calc(100% - 240px)` }, ml: { sm: `240px` } }}>
      <Toolbar>
        <IconButton color="inherit" edge="start" sx={{ mr: 2, display: { sm: "none" } }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;