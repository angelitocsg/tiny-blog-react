import React, { Component } from 'react'
import { connect } from 'react-redux'
import BlogPost from './BlogPost';
import { getAllPosts } from '../actions/blogActions';

class BlogIndex extends Component {
    componentDidMount() {
        console.log('BlogIndex mounted')
        this.props.onLoadIndex();
    }
    render() {
        return (
            <div>
                {this.props.posts
                    .sort(
                        (a, b) => (
                            Date.parse(a.date) > Date.parse(b.date) ? -1 :
                                Date.parse(a.date) < Date.parse(b.date) ? 1 : 0
                        )
                    )
                    .map(
                        post => (
                            <BlogPost
                                key={post._id}
                                post={post} />
                        )
                    )}
                <hr />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.blog.posts
    }
}

const mapDispatchToProps = (dispatch) => ({
    onLoadIndex: () => dispatch(
        getAllPosts()
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogIndex)