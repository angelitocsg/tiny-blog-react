import React from 'react'
import BlogPostHeader from './BlogPostHeader';
import { Link } from 'react-router-dom';

const BlogPost = (props) => (
    <div>
        <BlogPostHeader {...props.post} />

        <p>
            {props.post.content.substr(0, 150)}...{' '}
            <Link to={"/post/" + props.post._id}>[read more]</Link>
        </p>
    </div>
)

export default BlogPost