import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${"https://source.unsplash.com/random"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#424242"
    },
    textContainer: {
        padding: theme.spacing(5)
    },
    textHeader: {
        color: "white",
        marginBottom: theme.spacing(2)
    },
    textBody: {
        color: "white",
        marginBottom: theme.spacing(1)
    }
}));

function Banner(props) {

    const classes = useStyles();

    return (
        <Grid container style={{ marginTop: 10 }}>
            <Grid item lg={12}>
                <Paper className={classes.container}>
                    <Grid item lg={12} container>
                        <Grid item lg={6} className={classes.textContainer}>
                            <Typography variant="h3" className={classes.textHeader}>
                                Title of a longer featured blog post
                            </Typography>
                            <Typography variant="h6" className={classes.textBody}>
                                Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Banner;