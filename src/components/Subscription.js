import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Subscription({ title, price, description }) {
  return (
    <section>
      <Typography>{title}</Typography>
      <Typography>{price}</Typography>
      <Typography>{description}</Typography>
      <Button variant='contained'>Sign Up</Button>
    </section>
  );
}

export default Subscription;
