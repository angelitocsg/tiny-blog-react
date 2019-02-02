import { blogPosts } from "./blogPosts";
import { TAGS } from "./tags";

export const INITIAL_TEMP_STATE = {
    id: 0,
    title: '',
    tags: [],
    content: ''
}

export const INITIAL_STATE = {
    posts: [...blogPosts],
    tempPost: { ...INITIAL_TEMP_STATE },
    errors: [],
    tags: [...TAGS]
}