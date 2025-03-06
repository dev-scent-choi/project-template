import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import SignInForm from '../components/SignInForm';
import { useTheme } from '@mui/material/styles';

export default function SignIn() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const loginImage = import.meta.env.VITE_LOGIN_IMAGE;
  const companyName = import.meta.env.VITE_COMPANY_NAME;

  return (
    <Grid container sx={{ height: '100vh' }}>
      {/* Left Side */}
      {!isSmallScreen && (
        <Grid
          item
          xs={12} md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f9fafb',
            padding: 2,
            position: 'relative',
          }}
        >
          {/* <Box
            component="img"
            src="/logo192.png"
            alt="MUI Logo"
            sx={{ position: 'absolute', top: 16, left: 16, height: 40 }}
          /> */}
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
            
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            
          </Typography>
          <Box
            component="img"
            src={loginImage}
            alt="img_folder_login_openminds"
            sx={{ width: 500, height: 500 }}
          />
        </Grid>
      )}
      
      {/* Right Side */}
      <Grid
        item
        xs={12} md={6}
        sx={{
          display: 'flex',
          justifyContent: isSmallScreen ? 'center' : 'flex-start',
          alignItems: 'center',
          padding: 4,
        }}
      >
        <Box sx={{ maxWidth: 400, width: '100%' }}>
          <SignInForm isSmallScreen={isSmallScreen} companyName={companyName}/>
        </Box>
      </Grid>
    </Grid>
  );
}