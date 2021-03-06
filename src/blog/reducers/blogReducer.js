import { INITIAL_STATE, INITIAL_TEMP_STATE } from "../data/initialState";
import { SAVE_POST, FIELD_CHANGE, DELETE_POST, EDIT_POST } from "../actions/blogActions";

export const blogReducer = (state = INITIAL_STATE, action) => {
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

        case DELETE_POST:
        case SAVE_POST:
            console.log('blogReducer ' + action.type + ' called')

            if (action.payload.posts === undefined) {
                return {
                    ...state,
                    errors: [...action.payload.errors]
                }
            }

            return {
                ...state,
                posts: [...action.payload.posts],
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