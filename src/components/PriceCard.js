import React from 'react';
import Box from '@mui/material/Box';

function PriceCard() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        backgroundColor: 'white',
        width: '5rem',
        height: '5rem',
      }}
    >
      card
    </Box>
  );
}

export default PriceCard;
