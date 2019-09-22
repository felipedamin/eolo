/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import icone from './../images/hackathon-icone-01.svg'

const LayoutFooter = () => (
  <Footer className="container" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)', color:'#ffffff'}}>
    <Grid container direction="column" justify="space-between" alignItems="center">
      <img
        src={icone}
        align='center'
        style={{
          width: '15em',
          height: '15em',
        }}
      />
    </Grid>
  </Footer>
);

const Footer = styled.footer`
  display: block;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #00FF00;
`;

export default LayoutFooter