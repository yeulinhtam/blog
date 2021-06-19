import React from 'react';
import Header from './../components/Header';
import Banner from './../components/Banner';
import RecentPosts from './../components/RecentPosts';
import Paginate from './../components/Pagination';
import Container from '@material-ui/core/Container';

function HomeContainer(props) {
    return (
        <Container maxWidth="lg">
            <Header />
            <Banner />
            <RecentPosts />
            <Paginate />
        </Container>
    );
}

export default HomeContainer;