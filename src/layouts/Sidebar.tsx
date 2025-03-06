import React from "react";
import { Box, Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  const drawer = (
    <Box sx={{ width: drawerWidth }}>
      <Toolbar />
      <List>
        {["Dashboard", "Files", "Analytics", "Settings"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="permanent"
        sx={{ display: { xs: "none", sm: "block" }, "& .MuiDrawer-paper": { width: drawerWidth } }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;