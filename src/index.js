import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from "./Main"; 

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme'; 


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Main />
    </ThemeProvider>,    
    document.getElementById('root')
);