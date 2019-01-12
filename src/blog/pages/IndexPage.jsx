import React from 'react'
import BlogPost from './BlogPost';
import { blogPosts } from '../data/blogPosts';

const BlogIndex = (props) => (
    <div>
        {blogPosts
            .sort(
                (a, b) => (
                    Date.parse(a.date) > Date.parse(b.date) ? -1 :
                        Date.parse(a.date) < Date.parse(b.date) ? 1 : 0
                )
            )
            .map(
                post => (
                    <BlogPost
                        key={post.id}
                        post={post} />
                )
            )}
        <hr />
    </div>
)

export default BlogIndex