import React from 'react';
import { Grid } from '@material-ui/core';
import RecentPostItem from './RecentPostItem';

function RecentPosts(props) {
    return (
        <Grid container style={{ marginTop: 20, marginBottom: 20 }} spacing={3}>
            <RecentPostItem />
            <RecentPostItem />
            <RecentPostItem />
            <RecentPostItem />
            <RecentPostItem />
            <RecentPostItem />
        </Grid>
    );
}

export default RecentPosts;