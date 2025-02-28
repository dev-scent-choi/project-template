import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Main from './Main';

const theme = createTheme();

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleDrawerToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header onDrawerToggle={handleDrawerToggle} />
        <Sidebar open={navOpen} onDrawerToggle={handleDrawerToggle} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Main>{children}</Main>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default DashboardLayout;