import { INITIAL_STATE } from "../data/initialState";
import { SAVE_POST, FIELD_CHANGE } from "../actions/blogActions";

export const blogReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FIELD_CHANGE:
            console.log('blogReducer FIELD_CHANGE called')
            return state;

        case SAVE_POST:
            console.log('blogReducer SAVE_POST called')
            return state;

        default:
            console.log('blogReducer default called')
            return state;
    }
}