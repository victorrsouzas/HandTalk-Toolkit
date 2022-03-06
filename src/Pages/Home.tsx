import * as React from "react";
import { Grid, Box } from '@mui/material';
import SpeedDialComponent from "../Components/SpeedDial";

export interface IHomeProps { }

const Home: React.FunctionComponent<IHomeProps> = (props) => {

  return (
    <>
      <Grid container spacing={2} sx={{display: "flex"}}>
        <Grid item xs={12}>
          <Box sx={{ my: 2 }}>
            {[...new Array(12)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </Box>
        </Grid>
        <Grid item xs={12}>
              <SpeedDialComponent/>
        </Grid>
      </Grid>


    </>
  );
};
export default Home; 