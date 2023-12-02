import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Hidden } from '@mui/material';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
          <Typography variant="h6" component="div">
                YaData
              </Typography>
            
            <Hidden mdUp>
              {/* Show this only on small screens */}
              
            </Hidden>
          </Grid>
          <Grid item>
            <Hidden smDown>
              {/* Show this only on larger screens */}
              <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                
              </Typography>
            </Hidden>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            
            <Button color="inherit" component={Link} to="/solutions">Solutions</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
