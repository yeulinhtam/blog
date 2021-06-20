import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Breadcrumbs, Link, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RecentPostItem from './../RecentPosts/RecentPostItem';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(4, 0),
        flexGrow: 1,
    },
    breadCrumbRoot: {
        margin: theme.spacing(3, 0)
    },
    firstPostRoot: {
        position: "relative"
    },
    firstPostBody: {
        position: "absolute",
        bottom: 0,
        padding: 25
    },
    category: {
        marginRight: theme.spacing(2),
        backgroundColor: "#e36b10",
        padding: "2px 7px 2px 7px",
        borderRadius: 3,
        color: "white",
        fontWeight: 600
    },
    time: {
        color: "white",
        fontWeight: 600
    },
    link: {
        color: "white",
        fontWeight: 600,
        fontSize: 18
    }
}))


const itemStyles = makeStyles((theme) => ({
    category: {
        marginRight: theme.spacing(2),
        backgroundColor: "#e36b10",
        padding: "2px 7px 2px 7px",
        borderRadius: 3,
        color: "white",
        fontWeight: 600
    },
    time: {
        fontWeight: 400,
        fontSize: 14,
        color: "gray"
    },
    link: {
        fontWeight: 600,
        fontSize: 18,
        color: "black"
    }
}));

const ItemPost = (props) => {

    const classes = itemStyles();

    return (
        <>
            <Grid item lg={5}>
                <img src="https://preview.colorlib.com/theme/webmag/img/post-2.jpg" alt="javascript" />
            </Grid>
            <Grid item lg={7}>
                <Grid item container spacing={1}>
                    <Grid item lg={12} container>
                        <div className={classes.category}>
                            <Typography variant="body2">JAVASCRIPT</Typography>
                        </div>
                        <div>
                            <Typography className={classes.time}>March 27, 2020</Typography>
                        </div>
                    </Grid>
                    <Grid item lg={12}>
                        <Link href="#" underline="none" className={classes.link}>
                            Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks
                        </Link>
                    </Grid>
                    <Grid item lg={12}>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

function Category(props) {

    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item lg={12} className={classes.breadCrumbRoot}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" >
                        Home
                    </Link>
                    <Typography color="textPrimary">React JS</Typography>
                </Breadcrumbs>
            </Grid>
            <Grid item lg={8} container spacing={3}>

                <Grid item lg={12} container className={classes.firstPostRoot}>
                    <img src="https://preview.colorlib.com/theme/webmag/img/post-1.jpg.webp" alt="javascirpt" style={{ width: "100%" }} />
                    <Grid item container className={classes.firstPostBody} spacing={1}>
                        <Grid item lg={12} container>
                            <div className={classes.category}>
                                <Typography variant="body2">JAVASCRIPT</Typography>
                            </div>
                            <div className={classes.time}>
                                <Typography>March 27, 2020</Typography>
                            </div>
                        </Grid>
                        <Grid item lg={12}>
                            <Link href="#" underline="none" className={classes.link}>
                                Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={6}>
                    <RecentPostItem />
                </Grid>
                <Grid item lg={6}>
                    <RecentPostItem />
                </Grid>
                <Grid item lg={12} container direction="row" spacing={2}>
                    <ItemPost />
                </Grid>
                <Grid item lg={12} container direction="row" spacing={2}>
                    <ItemPost />
                </Grid>
                <Grid item lg={12} container direction="row" spacing={2}>
                    <ItemPost />
                </Grid>
                <Grid item lg={12} container direction="row" spacing={2}>
                    <ItemPost />
                </Grid>
                <Grid item lg={12} container direction="row" spacing={2}>
                    <ItemPost />
                </Grid>
                <Grid item lg={12} container style={{ margin: 30}} justify="center">
                    <Button variant="contained" color="secondary">LOAD MORE</Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Category;