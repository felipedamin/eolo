import * as React from 'react';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';

import theme from './theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

export const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <MuiPickersUtilsProvider utils={MomentUtils}>
      {children}
    </MuiPickersUtilsProvider>
  </MuiThemeProvider>
);