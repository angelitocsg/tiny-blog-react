import { loremText } from "./text";

//export const blogPosts = [];
export const blogPosts = [
    {
        id: 1,
        title: 'Post Title 1',
        date: '10/01/2019 12:15',
        tags: ['sports', 'variety'],
        content: '[lorem1] ' +
            loremText + '\r\n' +
            loremText + '\r\n' +
            loremText
    },
    {
        id: 2,
        title: 'Post Title 2',
        date: '11/01/2019 12:15',
        tags: ['sports', 'news'],
        content: '[lorem2] ' + loremText
    },
    {
        id: 3,
        title: 'Post Title 3',
        date: '12/01/2019 12:15',
        tags: ['news'],
        content: '[lorem3] ' + loremText
    }
]