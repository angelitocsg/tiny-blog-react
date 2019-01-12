import React from 'react'
import BlogPost from './BlogPost';
import BlogForm from './BlogForm';
import BlogPostFull from './BlogPostFull';
import { blogPosts } from '../data/blogPosts';

const BlogIndex = (props) => (
    <div>
        {blogPosts.map(
            post => (
                <BlogPost
                    key={post.id}
                    post={post} />
            )
        )}

        <hr />

        <BlogForm />
        <hr />

        <BlogPostFull post={blogPosts.length === 0 ? null : blogPosts[0]} />
    </div>
)

export default BlogIndex