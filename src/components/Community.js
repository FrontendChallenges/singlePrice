import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Community({ title, summary, description }) {
  return (
    <Box component='section' sx={{ padding: '3.5rem' }}>
      <Typography sx={{ color: 'primary.main' }} variant='h1'>
        {title}
      </Typography>
      <Typography
        sx={{ color: 'secondary.main' }}
        variant='subtitle1'
        component='h2'
      >
        {summary}
      </Typography>
      <Typography sx={{ color: 'text.primary' }}>{description}</Typography>
    </Box>
  );
}

export default Community;
