import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ p: 2, mt: 'auto', textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary">
        © 2023 Your Company
      </Typography>
    </Box>
  );
};

export default Footer;