import React from 'react'
import { connect } from 'react-redux'
import { savePost, fieldChange } from '../actions/blogActions';
import Textarea from '../components/Textarea';
import Select from 'react-select'

const BlogForm = ({
    tempPost,
    errors,
    tags,
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
                <Select
                    isMulti
                    closeMenuOnSelect={false}
                    name="tags"
                    options={tags}
                    className="basic-multi-select"
                    value={tempPost.tags}
                    onChange={(value, obj) => onFieldChange(
                        {
                            target:
                            {
                                name: obj.name,
                                value
                            }
                        }
                    )}
                />
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
                    {errors.map(error => (<li key={0}> {error}</li>))}
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
        errors: state.blog.errors,
        tags: state.blog.tags
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