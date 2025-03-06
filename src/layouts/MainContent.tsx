import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";

const MainContent: React.FC = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` } }}>
      <Toolbar />
      <Typography variant="h4">Welcome to your Dashboard</Typography>
      <Typography variant="body1">Here you can manage your files, analytics, and settings.</Typography>
    </Box>
  );
};

export default MainContent;
