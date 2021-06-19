import { InputBase, Avatar, IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ImageIcon from '@material-ui/icons/Image';
import AttachmentIcon from '@material-ui/icons/Attachment';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import React from 'react';


const Input = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        fontSize: 15,
        width: '100%',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {

        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1,0),
        alignItems: "center"
    },
    avatar: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        marginRight: theme.spacing(1),
    },
    inputRoot: {
        border: '1px solid #ced4da',
        padding: '3px 12px',
        borderRadius: 10,
    },
    input: {
        flex: 1
    },
    inputIcon: {
        width: "0.8em",
        margin: 2,
        color: 'gray',
        cursor: "pointer",
        '&:hover': {
            background: "#f2eeed",
        },
    }
}))

const PostComment = (props) => {

    const classes = useStyles();

    return (
        <Grid container className={classes.root} lg={12} xs={12}>
            <Grid item>
                <Avatar
                    src="https://minimals.cc/static/mock-images/avatars/avatar_10.jpg"
                    className={classes.avatar}>V
                </Avatar>
            </Grid>
            <Grid item lg container alignItems="center" direction="row" className={classes.inputRoot}>
                <Input variant="outlined" size="small" placeholder="Write comment" className={classes.input} />
                <IconButton size="small"> 
                    <ImageIcon className={classes.inputIcon} />
                </IconButton>
                <IconButton size="small"> 
                    <AttachmentIcon className={classes.inputIcon} />
                </IconButton>
                <IconButton size="small">
                    <EmojiEmotionsIcon className={classes.inputIcon} />
                </IconButton>
            </Grid>
        </Grid>
    )
}


export default PostComment