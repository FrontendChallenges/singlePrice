import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function WhyUs({ title, description }) {
  return (
    <Box
      component='section'
      sx={{ backgroundColor: 'primary.light', padding: '3.5rem' }}
    >
      <Typography
        variant='subtitle1'
        component='h2'
        sx={{ color: 'white', marginBottom: '1rem' }}
      >
        {title}
      </Typography>
      <Typography sx={{ color: 'text.secondary', marginBottom: '1rem' }}>
        {description}
      </Typography>
    </Box>
  );
}

export default WhyUs;
