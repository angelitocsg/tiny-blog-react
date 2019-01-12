import React from 'react'
import BlogPostHeader from './BlogPostHeader';

const BlogPostFull = (props) => {
    if (props.post === null) {
        return (
            <div className="text-danger">
                <h3>404 - No content</h3>
            </div>
        )
    }

    let i = 0;

    return (
        <div>
            <BlogPostHeader {...props.post} />

            {props.post.content
                .split('\r\n')
                .map(
                    text => (<p key={i++}>{text}</p>)
                )}

            <a href={"/post/edit/" + props.post.id}>[edit]</a>{' '}
            <a href="/">[delete]</a>
        </div>
    )
}

export default BlogPostFull