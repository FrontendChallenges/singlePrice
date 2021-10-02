import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Footer({ author, challengeBy }) {
  return (
    <footer>
      <Box sx={{ textAlign: 'center', padding: '1rem 0' }}>
        <Typography variant='body1'>
          Challenge by
          <Link
            href='https://www.frontendmentor.io?ref=challenge'
            target='_blank'
            rel='noreferrer'
          >
            {challengeBy}
          </Link>
          . Coded by <Link href='#top'>{author}.</Link>
        </Typography>
      </Box>
    </footer>
  );
}

export default Footer;
