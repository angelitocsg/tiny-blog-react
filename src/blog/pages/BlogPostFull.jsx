import React from 'react'
import BlogPostHeader from './BlogPostHeader';
import { connect } from 'react-redux';
import { deletePost, editPost } from '../actions/blogActions';
import { Link } from "react-router-dom";

const BlogPostFull = ({
    id,
    posts,
    onDeleteClick,
    onEditClick,
    history
}) => {
    const post = posts.find(post => post._id === id);

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

            <Link to="/">[voltar]</Link>
            {' '}
            <Link to={"/post/edit/" + post._id} onClick={() => onEditClick(post)}>[edit]</Link>
            {' '}
            <a href="/" onClick={(e) => onDeleteClick(e, post._id, history)}>[delete]</a>
        </div >
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);

    return {
        posts: state.blog.posts,
        ...ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEditClick: (post) => {
            return dispatch(
                editPost(post)
            )
        },
        onDeleteClick: (event, id, history) => {
            event.preventDefault();
            return dispatch(
                deletePost(id, history)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostFull)