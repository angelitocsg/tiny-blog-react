import React from 'react'

const BlogForm = (props) => (
    <div>
        <h2><p>New post</p></h2>

        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" className="form-control" />
        </div>

        <div className="form-group">
            <label htmlFor="tag">Tag</label>
            <select name="tag" id="tag" className="form-control">
                <option value="">-- Select --</option>
                <option value="food">Food</option>
                <option value="sports">Sports</option>
                <option value="variety">Variety</option>
            </select>
        </div>

        <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea name="content" id="content" className="form-control" rows="5"></textarea>
            <small>0 caracters</small>
        </div>

        <div>
            <button className="btn btn-primary">Save</button>
            {' '}
            <button className="btn btn-secondary">Cancel</button>
        </div>
    </div>
)

export default BlogForm