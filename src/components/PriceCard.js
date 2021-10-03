import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Community from './Community';
import Subscription from './Subscription';
import Whyus from './Whyus';

function PriceCard({
  joinTitle,
  joinSummary,
  joinDesc,
  subScripTitle,
  subScripPrice,
  subScripDesc,
  whyUsTitle,
  whyUsDesc,
}) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid
        container
        sx={{
          backgroundColor: 'white',
          flexDirection: 'column',
          borderRadius: '.8rem',
          overflow: 'hidden',
          width: '55%',
        }}
      >
        <Grid item>
          <Community
            title={joinTitle}
            summary={joinSummary}
            description={joinDesc}
          />
        </Grid>
        <Grid container item>
          <Grid item sm={12} md={6}>
            <Subscription
              title={subScripTitle}
              price={subScripPrice}
              description={subScripDesc}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <Whyus title={whyUsTitle} description={whyUsDesc} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PriceCard;
