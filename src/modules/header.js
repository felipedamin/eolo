import * as React from 'react';
import { NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const LayoutHeader = () => (
  <AppBar position="static">
    <Header className="container">
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Typography align="center">LOGO!</Typography>
          <NavLink to="/home">
          <Button size="small" color="inherit">
              Home
          </Button>
        </NavLink>
          <NavLink to="/status">
          <Button size="small" color="inherit">
              Turbinas
          </Button>
        </NavLink>
      </Grid>
    </Header>
  </AppBar>
);

const Header = styled.header`
  display: block;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #00FF00;
`;

export default LayoutHeader