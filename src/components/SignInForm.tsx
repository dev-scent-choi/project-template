import { Avatar, Button, TextField, Link, Grid, Box, Typography, Paper, Alert, IconButton, InputAdornment } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
interface SignInFormProps {
  isSmallScreen: boolean;
  companyName: string;
}
export default function SignInForm({ isSmallScreen, companyName }: SignInFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    
    navigate('/dashboard');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
      {/* <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ mr: 1 }}>Need help?</Typography>
        <IconButton>
          <SettingsIcon sx={{ animation: 'spin 2s linear infinite' }} />
        </IconButton>
      </Box> */}
      <Typography
        variant="h5"
        sx={{
          mb: 1,
          textAlign: !isSmallScreen ? 'left' : 'center',
          fontWeight: 'bold',
          fontSize: '19px',
        }}
      >
        {companyName}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        
      </Typography>
      <Alert severity="info" sx={{ mb: 2 }}>
        사용중인 <strong>{companyName}</strong> 이메일을 이용해 로그인해주세요. 초기 비밀번호는 <strong>1</strong> 입니다.
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
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment: <InputAdornment position="end">@openminds.co.kr</InputAdornment>,
        }}
      />
      <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
        <Typography variant="body2"></Typography>
        <Link
            href="#"
            variant="body2"
            sx={{
              color: 'inherit', 
              textDecoration: 'none', 
              '&:hover': {
                textDecoration: 'none', 
              },
            }}
          >
          비밀번호 찾기
        </Link>
      </Grid>
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
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
        InputLabelProps={{ shrink: true }}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: '#000', color: '#fff' }}>
        로그인
      </Button>
    </Box>
  );
}
