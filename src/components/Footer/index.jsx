import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3,0),
        backgroundColor: "#424242"
    },
    infoContainer: {
        margin: theme.spacing(2, 0, 10, 0),
        display: 'flex',
        justifyContent: "center",
        flexDirection: 'column'
    },
    infoRow: {
        margin: theme.spacing(1, 0, 0, 0),
        display: 'flex',
        alignItems: "center"
    },
    icon: {
        marginRight: theme.spacing(1),
        color: "white"
    },
    text: {
        color: "white"
    },
    textGray: {
        color: "gray",
        textAlign: "start"
    },
    socialContainer: {
        marginTop: theme.spacing(2)
    },
    socialIcon: {
        color: "white",
        marginRight: theme.spacing(1)
    }
}));

function Footer(props) {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <Container maxWidth="lg">
                <Grid container direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item lg={6}>
                        <div className={classes.infoContainer}>
                            <div className={classes.infoRow}>
                                <IconButton aria-label="address">
                                    <LocationOnIcon fontSize="default" className={classes.icon} />
                                </IconButton>
                                <Typography variant="body2" className={classes.text}>134/90 TCH 18, Q.12, TP.Ho Chi Minh</Typography>
                            </div>
                            <div className={classes.infoRow}>
                                <IconButton aria-label="phone">
                                    <PhoneIcon fontSize="default" className={classes.icon} />
                                </IconButton>
                                <Typography variant="body2" className={classes.text}>0815544484</Typography>
                            </div>
                            <div className={classes.infoRow}>
                                <IconButton aria-label="email">
                                    <MailIcon fontSize="default" className={classes.icon} />
                                </IconButton>
                                <Typography variant="body2" className={classes.text}>yeulinhtam@gmail.com</Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={6}>

                        <Typography variant="h4" className={classes.text}>About Me</Typography>
                        <Typography variant="body2" className={classes.textGray}>An architect, software developer, YouTuber and keynote speaker. On this site I write about my learning and experience.</Typography>

                        <div className={classes.socialContainer}>
                            <IconButton aria-label="delete" className={classes.socialIcon}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton aria-label="delete" className={classes.socialIcon}>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton aria-label="delete" className={classes.socialIcon}>
                                <GitHubIcon />
                            </IconButton>
                            <IconButton aria-label="delete" className={classes.socialIcon}>
                                <InstagramIcon />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Grid >
    );
}

export default Footer;