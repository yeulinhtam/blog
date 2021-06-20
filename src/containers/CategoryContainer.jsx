import React from 'react';
import Category from './../components/Category';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Container from '@material-ui/core/Container';

function CategoryContainer(props) {
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header />
                <Banner />
                <Category />
            </Container>
        </React.Fragment>
    );
}

export default CategoryContainer;