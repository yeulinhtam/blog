import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

const readMoreStyles = makeStyles((them) => ({
    textComment: {
        fontSize: 14,
        fontWeight: 400,
        color: "rgb(99, 115, 129)"
    },
    readMore: {
        fontWeight: 600,
        cursor: "pointer"
    }
}));

const ReadMore = ({ children }) => {
    const classes = readMoreStyles();
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <Typography variant="caption" className={classes.textComment}> {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} className={classes.readMore}>
                {isReadMore ? "... Read more" : null}
            </span></Typography>

    );
};

export default ReadMore;