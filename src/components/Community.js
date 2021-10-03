import React from 'react';
import Typography from '@mui/material/Typography';

function Community({ title, summary, description }) {
  return (
    <section>
      <Typography>{title}</Typography>
      <Typography>{summary}</Typography>
      <Typography>{description}</Typography>
    </section>
  );
}

export default Community;
