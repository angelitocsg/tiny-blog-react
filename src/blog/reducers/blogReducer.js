import { INITIAL_STATE, INITIAL_TEMP_STATE } from "../data/initialState";
import { SAVE_POST, FIELD_CHANGE, DELETE_POST } from "../actions/blogActions";

const PostIsValid = (post) => {
    if (post.title !== undefined && post.title !== '' &&
        post.tags !== undefined && post.tags.length > 0 &&
        post.content !== undefined && post.content !== '') {
        return true;
    }
    return false;
}

export const blogReducer = (state = INITIAL_STATE, action) => {
    let posts = [];

    switch (action.type) {
        case FIELD_CHANGE:
            console.log('blogReducer FIELD_CHANGE called')

            return {
                ...state,
                tempPost: {
                    ...state.tempPost,
                    [action.payload.name]: action.payload.value
                }
            }

        case SAVE_POST:
            console.log('blogReducer SAVE_POST called')

            let post = {
                ...state.tempPost,
                tags: state.tempPost.tags === undefined ? [] :
                    [...state.tempPost.tags.map(tag => (tag.value))],
                date: new Date().toLocaleString('en-US'),
                id: state.posts.length + 1
            }

            if (!PostIsValid(post)) {
                return {
                    ...state,
                    errors: ['Tá errado! Preencha certo!']
                }
            }

            posts = [...state.posts, post]
                .map(
                    (postAtual, index) => ({
                        ...postAtual,
                        id: index + 1
                    })
                );

            return {
                ...state,
                posts: [...posts],
                errors: [],
                tempPost: { ...INITIAL_TEMP_STATE }
            }

        case DELETE_POST:
            console.log('blogReducer DELETE_POST called')

            let id = action.payload.id;
            posts = [...state.posts.reduce(
                (p, post) => post.id === id ? [...p] : [...p, post], []
            )]

            return {
                ...state,
                posts: [...posts],
                errors: [],
                tempPost: { ...INITIAL_TEMP_STATE }
            }

        default:
            console.log('blogReducer default called')
            return state;
    }
}