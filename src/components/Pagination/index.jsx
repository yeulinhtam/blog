import cyan from '@material-ui/core/colors/cyan';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import React from 'react';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: cyan[400],
        },
        secondary: {
            main: '#f44336',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    container: {
        margin: theme.spacing(2,0,5,0),
        display: 'flex',
        justifyContent: "center"
    },
}));

function Paginate(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <ThemeProvider theme={theme}>
                <Pagination count={10} size="large" color="primary"/>
            </ThemeProvider>
        </div>
    );
}

export default Paginate;