import React from 'react'
import { connect } from 'react-redux'
import BlogPost from './BlogPost';

const BlogIndex = ({ posts }) => (
    <div>
        {posts
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

const mapStateToProps = (state) => {
    return {
        posts: state.blog.posts
    }
}

export default connect(mapStateToProps)(BlogIndex)