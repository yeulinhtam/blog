import React from 'react';
import { Grid } from '@material-ui/core';
import Post from './Post';

function RecentPosts(props) {
    return (
        <Grid container style={{ marginTop: 20, marginBottom: 20 }} spacing={3}>
            <Grid item lg={4}>
                <Post />
            </Grid>
            <Grid item lg={4}>
                <Post />
            </Grid>
            <Grid item lg={4}>
                <Post />
            </Grid>
            <Grid item lg={4}>
                <Post />
            </Grid>
            <Grid item lg={4}>
                <Post />
            </Grid>
            <Grid item lg={4}>
                <Post />
            </Grid>
        </Grid>
    );
}

export default RecentPosts;