import React from 'react';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';


function Breadcumb(props) {

    const links = { props };

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {links & links.length ? links.map((link, index) => {
                if (link.href) {
                    return <Link color="inherit" href="/">
                        {link.name}
                    </Link>
                }
                return <Typography color="textPrimary"> {link.name}</Typography>
            }) : null}
        </Breadcrumbs>
    );
}

export default Breadcumb;