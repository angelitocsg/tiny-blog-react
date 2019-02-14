//import { blogPosts } from "./blogPosts";
import { TAGS } from "./tags";

export const INITIAL_TEMP_STATE = {
    _id: 0,
    title: '',
    tags: [],
    content: ''
}

export const INITIAL_STATE = {
    posts: [{
        _id: 0,
        title: 'Carregando posts',
        createdAt: '',
        tags: [],
        content: ''
    }],
    tempPost: { ...INITIAL_TEMP_STATE },
    errors: [],
    tags: [...TAGS]
}