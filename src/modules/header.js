import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import dropEsquerda from './../images/hackathon-drop-esquerda.svg'
import logo from './../images/hackathon-logo.svg'

class LayoutHeader extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }

  parquesList = () => (
    <div
      style={{ width: "250px", backgroundColor: '#ff7b17' }}
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
      <AppBar position="static" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: '#ffffff' }} >
        <Header className="container">
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Button onClick={this.toggleDrawer(true)} size="small" style={{ color: '#ffffff', marginLeft: '3em' }}>
              <img
                onClick={this.toggleDrawer(true)}
                src={dropEsquerda}
                style={{ width: '2.5em', height: '2.5em' }} />
            </Button>
            <img
              src={logo}
              align="center"
              style={{ width: '15em', height: '7em' }} />
            <div style={{ width: '6em' }} />

          </Grid>
          <Grid container direction="row" justify="space-around" alignItems="center">
            <div style={{ width: '0em' }} />
            <div>|</div>
            <NavLink to="/home" >
              <Button size="small" style={{ color: '#ffffff' }}>
                Geral </Button>
            </NavLink>
            <div>|</div>
            <NavLink to="/home" >
              <Button size="small" style={{ color: '#ffffff' }}>
                Turbina </Button>
            </NavLink>
            <div>|</div>
            <NavLink to="/status">
              <Button size="small" style={{ color: '#ffffff' }}>
                Visão do Parque </Button>
            </NavLink>
            <div>|</div>
            <NavLink to="/status">
              <Button size="small" style={{ color: '#ffffff' }}>
                Contato </Button>
            </NavLink>
            <div>|</div>
            <div style={{ width: '0em' }} />
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
  background-color:rgba(0, 0, 0, 0.1);
`;

export default LayoutHeader