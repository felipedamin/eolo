import { createMuiTheme } from '@material-ui/core';
import { blue } from '@material-ui/core/colors'
import theme from './consts';

export default createMuiTheme({
  palette: {
    primary: {
      main: theme.colors.primary,
    },
    secondary: blue,
  },
  overrides: {
    MuiTableCell: {
      head: {
        fontSize: '0.9rem',
      },
      body: {
        fontSize: '0.86rem',
      },
    },
    MuiButton: {
      contained: {
        backgroundColor: theme.colors.white,
      },
      containedPrimary: {
        color: theme.colors.white,
      },
      sizeSmall: {
        fontSize: theme.font.small,
        minHeight: theme.spacing.base,
        minWidth: theme.spacing.xlarge,
        padding: '2px 4px',
      },
    },
    MuiStepLabel: {
      label: {
        '&$active': {
          color: theme.colors.success,
        },
      },
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    textPrimary: theme.colors.white,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
  },
});