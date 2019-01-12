import React from 'react'

const BlogPostHeader = (props) => (
    <div>
        <h3><p>{props.title}</p></h3>

        <p>
            <span className="badge badge-secondary">{props.date}</span>{' '}

            {props.tags === undefined ? null : props.tags.map(tag => (
                <span key={tag}>
                    <span className="badge badge-primary">{tag}</span>{' '}
                </span>
            ))}
        </p>
    </div>
)

export default BlogPostHeader