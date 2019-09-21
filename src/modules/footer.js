import * as React from 'react';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const year = new Date().getFullYear();

const LayoutFooter = () => (
  <Footer className="container">
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Typography align="center">Footer {`${year}`}</Typography>
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