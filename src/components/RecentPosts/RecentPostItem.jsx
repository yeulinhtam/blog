import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 405,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    container: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row'
    },
    category: {
        marginRight: theme.spacing(2),
        backgroundColor: "#42cef5",
        padding: "3px 5px 3px 5px",
        borderRadius: 3,
        color: "white"
    },
    time: {
        display: 'flex',
        alignItems: "center",
        color: "black"
    },
    linkContainer: {
        marginTop: theme.spacing(1),
        textAlign: "start",
    },
    link: {
        color: "black",
        fontSize: 18,
        fontWeight: 500
    }
}));

function RecentPostItem(props) {

    const classes = useStyles();

    return (

        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image="https://preview.colorlib.com/theme/webmag/img/xpost-3.jpg.pagespeed.ic.UjtolzGXxD.webp"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                <div className={classes.container}>
                    <div className={classes.category}>
                        <Typography variant="body2" >WEB DESIGN</Typography>
                    </div>
                    <div className={classes.time}>
                        <Typography variant="caption">March 27, 2018</Typography>
                    </div>
                </div>
                <div className={classes.linkContainer}>
                    <Link href="#" underline="none" className={classes.link}>
                        Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}

export default RecentPostItem;