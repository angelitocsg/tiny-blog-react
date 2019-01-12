import React from 'react'
import BlogPostHeader from './BlogPostHeader';

const BlogPost = (props) => (
    <div>
        <BlogPostHeader {...props.post} />

        <p>
            {props.post.content.substr(0, 150)}...{' '}
            <a href={"/post/" + props.post.id}>[read more]</a>
        </p>
    </div>
)

export default BlogPost