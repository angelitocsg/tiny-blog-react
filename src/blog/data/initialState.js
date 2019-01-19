import { blogPosts } from "./blogPosts";

export const INITIAL_TEMP_STATE = {
    title: '',
    tags: '',
    content: ''
}

export const INITIAL_STATE = {
    posts: [...blogPosts],
    tempPost: {...INITIAL_TEMP_STATE},
    errors: []
}