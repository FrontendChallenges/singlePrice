import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Subscription({ title, price, description }) {
  return (
    <Box
      component='section'
      sx={{ backgroundColor: 'primary.main', padding: '3.5rem' }}
    >
      <Typography variant='subtitle1' component='h2' sx={{ color: 'white' }}>
        {title}
      </Typography>
      <Typography
        sx={{
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold',
        }}
      >
        {price}
        <Typography
          component='span'
          sx={{ color: 'text.secondary', marginLeft: '.5rem' }}
        >
          per month
        </Typography>
      </Typography>
      <Typography sx={{ color: 'text.secondary', marginBottom: '3.5rem' }}>
        {description}
      </Typography>
      <Button variant='contained' color='secondary'>
        Sign Up
      </Button>
    </Box>
  );
}

export default Subscription;
