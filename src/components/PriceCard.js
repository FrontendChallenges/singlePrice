import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function PriceCard() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
      }}
    >
      <Grid
        container
        sx={{ backgroundColor: 'white', flexDirection: 'column' }}
      >
        <Grid item>Row1</Grid>
        <Grid container item>
          <Grid item>Row2</Grid>
          <Grid item>Row3</Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PriceCard;
