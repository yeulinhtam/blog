import { Avatar, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import ReadMore from './ReadMore';
import PostComment from './PostComment';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(4, 0),
        flexGrow: 1,
    },
    title: {
        color: "black",
        fontWeight: "600"
    },
    image: {

    },
    info: {

    },
    share: {

    },
    commentContainer: {
        marginTop: theme.spacing(1),
    },
    textUsername: {
        color: "black",
        fontWeight: 600
    },
    textComment: {

    },
    avatar: {
        marginRight: theme.spacing(1),
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    action: {
        fontSize: 13,
        marginRight: theme.spacing(1),
        padding: (2, 5),
        borderRadius: 5,
        cursor: "pointer",
        '&:hover': {
            background: "#f2eeed",
        },
    }
}))

function Comment(props) {
    const classes = useStyles();
    
    const [openPostComment, setOpenPostComment] = useState(false);

    return (
        <Grid item lg={12} container direction="row" alignContent="center" className={classes.commentContainer}>
            <Avatar className={classes.avatar} src="https://minimals.cc/static/mock-images/avatars/avatar_10.jpg">H</Avatar>
            <div style={{ flex: 1 }}>
                <Typography variant="body2" className={classes.textUsername}>Marion Terry Sr.</Typography>
                <ReadMore>
                    Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisciVoluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisciVoluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisciVoluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisciVoluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci
                </ReadMore>
                <div style={{ marginTop: 5 }}>
                    <Typography variant="caption" className={classes.action}>Like</Typography>
                    <Typography variant="caption" className={classes.action} onClick={() => { setOpenPostComment(true) }}>Reply</Typography>
                    <Typography variant="caption" className={classes.action}>1 Hour</Typography>
                </div>
                {openPostComment ? <PostComment /> : null}
            </div>
        </Grid>
    );
}

export default Comment;