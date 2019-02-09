import axios from 'axios'

export const SAVE_POST = 'SAVE_POST';
export const FIELD_CHANGE = 'FIELD_CHANGE';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';

const URL = 'http://localhost:3010';

const PostIsValid = (post) => {
    if (post.title !== undefined && post.title !== '' &&
        post.tags !== undefined && post.tags.length > 0 &&
        post.content !== undefined && post.content !== '') {
        return true;
    }
    return false;
}

export const savePost = (tempPost) => {
    return dispatch => {
        let post = {
            title: tempPost.title,
            content: tempPost.content,
            tags: tempPost.tags === undefined ? [] :
                [...tempPost.tags.map(tag => (tag.value))]
        }
        if (!PostIsValid(post)) {
            return dispatch({
                type: SAVE_POST,
                payload: {
                    errors: ['Tá errado! Preencha certo!']
                }
            })
        }
        if (tempPost._id === 0) {
            axios
                .post(`${URL}/posts`, { ...post })
                .then(resp => {
                    return dispatch(getAllPosts());
                })
                .catch(error => {
                    return dispatch({
                        type: SAVE_POST,
                        payload: { errors: 'Falha ao salvar' }
                    })
                });
        } else {
            axios
                .put(`${URL}/posts/${tempPost._id}`, { ...post })
                .then(resp => {
                    return dispatch(getAllPosts());
                })
                .catch(error => {
                    return dispatch({
                        type: SAVE_POST,
                        payload: { errors: 'Falha ao atualizar' }
                    })
                });
        }
    }
}

export const getAllPosts = () => {
    return dispatch => {
        axios
            .get(`${URL}/posts`)
            .then(resp => {
                return dispatch({
                    type: SAVE_POST,
                    payload: {
                        posts: [...resp.data]
                    }
                })
            })
            .catch(error => {
                return dispatch({
                    type: SAVE_POST,
                    payload: {
                        errors: ["Falha ao ler posts"]
                    }
                })
            })
    }
}

export const fieldChange = (event) => ({
    type: FIELD_CHANGE,
    payload: event.target
})

export const deletePost = (id, history) => (
    [
        {
            type: DELETE_POST,
            payload: { id }
        },
        history.push('/')
    ]
)

export const editPost = (post) => ({
    type: EDIT_POST,
    payload: post
})