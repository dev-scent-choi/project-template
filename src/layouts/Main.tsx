import { Box } from '@mui/material';

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ mt: 8 }}>
      {children}
    </Box>
  );
};

export default Main;