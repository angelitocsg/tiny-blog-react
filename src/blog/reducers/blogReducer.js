import { INITIAL_STATE, INITIAL_TEMP_STATE } from "../data/initialState";
import { SAVE_POST, FIELD_CHANGE, DELETE_POST, EDIT_POST } from "../actions/blogActions";

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
                    [...state.tempPost.tags.map(tag => (tag.value))]
            }

            if (!PostIsValid(post)) {
                return {
                    ...state,
                    errors: ['Tá errado! Preencha certo!']
                }
            }

            if (post.id === 0) {
                const newId = 1 + state.posts.reduce(
                    (id, post) => (id > post.id ? id : post.id), 0
                )
                posts = [...state.posts, {
                    ...post,
                    id: newId,
                    date: new Date().toLocaleString('en-US')
                }]
            } else {
                posts = [...state.posts.map((postAtual) =>
                    postAtual.id === post.id ? { ...post } : { ...postAtual }
                )]
            }

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

        case EDIT_POST:
            console.log('blogReducer EDIT_POST called')

            const tagsWithLabel = action.payload.tags
                .map(tag => ({
                    value: tag,
                    label: state.tags.find(t => (t.value === tag)).label
                }))

            return {
                ...state,
                tempPost: {
                    ...action.payload,
                    tags: tagsWithLabel
                }
            }

        default:
            console.log('blogReducer default called')
            return state;
    }
}