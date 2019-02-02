export const SAVE_POST = 'SAVE_POST';
export const FIELD_CHANGE = 'FIELD_CHANGE';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';

export const savePost = () => ({
    type: SAVE_POST
})

export const fieldChange = (event) => ({
    type: FIELD_CHANGE,
    payload: event.target
})

export const deletePost = (id) => ({
    type: DELETE_POST,
    payload: { id }
})

export const editPost = (post) => ({
    type: EDIT_POST,
    payload: post
})