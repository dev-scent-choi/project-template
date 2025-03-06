import React from 'react';
import { Box, CssBaseline, useTheme, useMediaQuery } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { LayoutSection } from './core/LayoutSection';
import { HeaderSection } from './core/HeaderSection';

export type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const layoutQuery: Breakpoint = 'lg';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <LayoutSection
        headerSection={
          <HeaderSection
            layoutQuery={layoutQuery}
            slotProps={{
              container: {
                maxWidth: false,
                sx: { px: { [layoutQuery]: 5 } },
              },
            }}
            slots={{
              leftArea: (
                <>
                  <Header onMenuClick={handleMenuClick} />
                </>
              ),
              rightArea: (
                <Box gap={1} display="flex" alignItems="center">
                  {/* 여기에 추가적인 요소를 넣을 수 있습니다 */}
                </Box>
              ),
            }}
          />
        }
        footerSection={<Footer />}
        cssVars={{
          '--layout-nav-vertical-width': '200px',
          '--layout-dashboard-content-pt': theme.spacing(1),
        }}
      >
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Sidebar open={sidebarOpen} onClose={handleSidebarClose} />
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <MainContent />
            {children}
          </Box>
        </Box>
      </LayoutSection>
    </Box>
  );
};

export default DashboardLayout;