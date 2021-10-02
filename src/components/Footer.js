import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Footer({ author, challengeBy }) {
  return (
    <footer>
      <Box sx={{ backgroundColor: 'blue' }}>
        <Typography variant='body1'>
          Challenge by
          <a
            href='https://www.frontendmentor.io?ref=challenge'
            target='_blank'
            rel='noreferrer'
          >
            {challengeBy}
          </a>
          . Coded by <a href='#top'>{author}</a>.
        </Typography>
      </Box>
      {/* <Container className='text-center' fluid={'md'}>
        <p>
          Challenge by
          <a
            href='https://www.frontendmentor.io?ref=challenge'
            target='_blank'
            rel='noreferrer'
          >
            {challengeBy}
          </a>
          . Coded by <a href='#top'>{author}</a>.
        </p>
      </Container> */}
    </footer>
  );
}

export default Footer;
