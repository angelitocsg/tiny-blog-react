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
    onSaveClick,
    history
}) => (
        <div>
            <h2><p>{tempPost._id === 0 ? 'New' : 'Edit'} post</p></h2>

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
                    {errors.map(error => (<li key={0}>{'  '} {error}</li>))}
                </ul>
            )}

            <div>
                <button
                    className="btn btn-primary"
                    onClick={() => onSaveClick(tempPost)}
                >Save</button>
                {' '}
                <button className="btn btn-secondary"
                    onClick={() => { history.push('/') }}
                >Cancel</button>
            </div>
        </div>
    )

const mapStateToProps = (state, ownProps) => {
    return {
        tempPost: state.blog.tempPost,
        errors: state.blog.errors,
        tags: state.blog.tags,
        ...ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFieldChange: (event) => dispatch(
            fieldChange(event)
        ),
        onSaveClick: (tempPost) => dispatch(
            savePost(tempPost)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogForm)