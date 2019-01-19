import React from 'react'
import { connect } from 'react-redux'
import { savePost, fieldChange } from '../actions/blogActions';
import Textarea from '../components/Textarea';

const BlogForm = ({
    tempPost,
    errors,
    onFieldChange,
    onSaveClick
}) => (
        <div>
            <h2><p>New post</p></h2>

            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title"
                    className="form-control"
                    value={tempPost.title}
                    onChange={onFieldChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <select name="tags" id="tags"
                    className="form-control"
                    value={tempPost.tags}
                    onChange={onFieldChange}
                >
                    <option value="">-- Select --</option>
                    <option value="food">Food</option>
                    <option value="sports">Sports</option>
                    <option value="variety">Variety</option>
                </select>
            </div>

            <Textarea
                label="Content"
                rows="5"
                name="content"
                value={tempPost.content}
                onChange={onFieldChange}
            />

            {errors.length === 0 ? null : (
                <ul className="alert alert-danger">
                    {errors.map(error => (<li> {error}</li>))}
                </ul>
            )}

            <div>
                <button
                    className="btn btn-primary"
                    onClick={onSaveClick}
                >Save</button>
                {' '}
                <button className="btn btn-secondary">Cancel</button>
            </div>
        </div>
    )

const mapStateToProps = (state) => {
    return {
        tempPost: state.blog.tempPost,
        errors: state.blog.errors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFieldChange: (event) => dispatch(
            fieldChange(event)
        ),
        onSaveClick: () => dispatch(
            savePost()
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogForm)