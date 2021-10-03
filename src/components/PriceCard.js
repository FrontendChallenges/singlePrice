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
        sx={{
          backgroundColor: 'white',
          flexDirection: 'column',
          borderRadius: '.8rem',
          padding: '4rem',
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
          <Grid item sm={6}>
            <Subscription
              title={subScripTitle}
              price={subScripPrice}
              description={subScripDesc}
            />
          </Grid>
          <Grid item sm={6}>
            <Whyus title={whyUsTitle} description={whyUsDesc} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PriceCard;
