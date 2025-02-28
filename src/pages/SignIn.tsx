import { Box, Grid, Typography } from '@mui/material';
import SignInForm from '../components/SignInForm';

export default function SignIn() {
  return (
    <Grid container sx={{ height: '100vh' }}>
      {/* Left Side */}
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
        <Box
          component="img"
          src="/logo192.png"
          alt="MUI Logo"
          sx={{ position: 'absolute', top: 16, left: 16, height: 40 }}
        />
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
          Hi, Welcome back
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          More effectively with optimized workflows.
        </Typography>
        <Box
          component="img"
          src="/logo512.png"
          alt="Illustration"
          sx={{ width: '80%', maxWidth: 400 }}
        />
      </Grid>
      
      {/* Right Side */}
      <Grid
        item
        xs={12} md={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
        }}
      >
        <Box sx={{ maxWidth: 400, width: '100%' }}>
          <SignInForm />
        </Box>
      </Grid>
    </Grid>
  );
}
