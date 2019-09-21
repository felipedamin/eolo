import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

class LayoutHeader extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }

  parquesList = () => (
    <div
      style={{ width: "250px" }}
      role="presentation"
      onClick={this.toggleDrawer(false)}
      onKeyDown={this.toggleDrawer(false)}
    >
      <List onClick={this.toggleDrawer(false)}>
        {['Parque A', 'Parque B', 'Parque C', 'Parque D'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  toggleDrawer = (open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ open: open });
  };

  render() {
    return (
      <AppBar position="static">
        <Header className="container">
          <Grid container direction="row" justify="space-between" alignItems="center">

            <Button onClick={this.toggleDrawer(true)}>Selecione o Parque Eólico</Button>
            <SwipeableDrawer
              anchor="left"
              open={this.state.open}
              onClose={this.toggleDrawer(false)}
              onOpen={this.toggleDrawer(true)}
            >{this.parquesList()}</SwipeableDrawer>

            <NavLink to="/home">
              <Button size="small" color="inherit">
                Home </Button>
            </NavLink>
            <NavLink to="/status">
              <Button size="small" color="inherit">
                Turbinas </Button>
            </NavLink>

            <Typography align="center">LOGO!</Typography>
          </Grid>
        </Header>
      </AppBar>
    );
  }
}

const Header = styled.header`
  display: block;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #50FF50;
`;

export default LayoutHeader