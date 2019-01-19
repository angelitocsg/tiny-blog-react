export const SAVE_POST = 'SAVE_POST';
export const FIELD_CHANGE = 'FIELD_CHANGE';

export const savePost = () => ({
    type: SAVE_POST
})

export const fieldChange = (event) => ({
    type: FIELD_CHANGE,
    payload: event.target
})