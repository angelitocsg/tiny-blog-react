import React from 'react'
import BlogPostHeader from './BlogPostHeader';
import { connect } from 'react-redux';

const BlogPostFull = ({ id, posts }) => {
    const post = posts.find(post => post.id === id);

    if (post === undefined) {
        return (
            <div className="text-danger">
                <h3>404 - Not found</h3>
            </div>
        )
    }

    let i = 0;

    return (
        <div>
            <BlogPostHeader {...post} />

            {post.content
                .split('\r\n')
                .map(
                    text => (<p key={i++}>{text}</p>)
                )}

            <a href={"/post/edit/" + post.id}>[edit]</a>{' '}
            <a href="/">[delete]</a>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);

    return {
        posts: state.blog.posts,
        ...ownProps
    }
}

export default connect(mapStateToProps)(BlogPostFull)