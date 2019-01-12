import { loremText } from "./text";

//export const blogPosts = [];
export const blogPosts = [
    {
        id: 1,
        title: 'Post Title 1',
        date: '2018-01-25 12:15',
        tags: ['sports', 'variety'],
        content: '[lorem1] ' +
            loremText + '\r\n' +
            loremText + '\r\n' +
            loremText
    },
    {
        id: 2,
        title: 'Post Title 2',
        date: '2017-05-13 12:15',
        tags: ['sports', 'news'],
        content: '[lorem2] ' + loremText
    },
    {
        id: 3,
        title: 'Post Title 3',
        date: '2018-07-14 12:15',
        tags: ['news'],
        content: '[lorem3] ' + loremText
    }
]