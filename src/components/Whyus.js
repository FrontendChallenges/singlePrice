import React from 'react';
import Typography from '@mui/material/Typography';

function WhyUs({ title, description }) {
  return (
    <section>
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
    </section>
  );
}

export default WhyUs;
