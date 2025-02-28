import { Avatar, Button, TextField, Link, Grid, Box, Typography, Paper, Alert, IconButton, InputAdornment } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
      <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ mr: 1 }}>Need help?</Typography>
        <IconButton>
          <SettingsIcon sx={{ animation: 'spin 2s linear infinite' }} />
        </IconButton>
      </Box>
      <Typography variant="h5" sx={{ mb: 1 }}>Sign in to your account</Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Don't have an account? <Link href="#">Get started</Link>
      </Typography>
      <Alert severity="info" sx={{ mb: 2 }}>
        Use <strong>demo@minimals.cc</strong> with password <strong>@2Minimal</strong>
      </Alert>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email address"
        name="email"
        autoComplete="email"
        autoFocus
        defaultValue="demo@minimals.cc"
      />
      <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
        <Typography variant="body2">Password</Typography>
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
      </Grid>
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label=""
        type={showPassword ? "text" : "password"}
        id="password"
        autoComplete="current-password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: '#000', color: '#fff' }}>
        Sign in
      </Button>
    </Box>
  );
}
