import React from 'react'
import Post from './post/Post'
import useStyles from './styles'

const Posts = () => {
    const classes = useStyles();

    return (
        <>
            Posts
            <Post />
            <Post />
        </>
    )
}

export default Posts
