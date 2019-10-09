import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Roboto, sans-serif'
  },
  palette: {
    primary: {
      main: '#ffffff',
      light: '#ffffff',
      Dark: '#cccccc',
      contrastText: '#000000'
    },
    secondary: {
      main: '#212121',
      light: '#484848',
      Dark: '#000000',
      contrastText: '#ffffff'
    },
    shape: {
      borderRadius: 0
    }
  },
  overrides: {
    MuiAvatar: {
      avatar: {
        margin: 10
      },
      bigAvatar: {
        margin: 10,
        width: 60,
        height: 60
      }
    }
  }
});

export default theme;
