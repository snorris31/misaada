
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app

const theme = createMuiTheme({
    typography: {
        h1: {
            fontWeight: 300,
            fontSize: 30,
            letterSpacing: 0.5,
            color: "fff"
        },
    },
    palette: {
        primary: {
            main: '#fa9a00',
        },
        secondary: {
            main: '#78909c',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
  
    },
});
export default theme;