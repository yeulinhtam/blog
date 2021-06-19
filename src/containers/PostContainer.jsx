import React from 'react';
import Post from './../components/Post';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Container from '@material-ui/core/Container';

function PostContainer(props) {
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header />
                <Banner />
                <Post />
            </Container>
        </React.Fragment>
    );
}

export default PostContainer;