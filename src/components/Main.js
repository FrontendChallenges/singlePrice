import React from 'react';
import Box from '@mui/material/Box';

function Main({ children }) {
  return (
    <main>
      <Box
        sx={{
          backgroundColor: 'red',
          height: '90vh',
          position: 'relative',
        }}
      >
        {children}
      </Box>
    </main>
  );
}

export default Main;