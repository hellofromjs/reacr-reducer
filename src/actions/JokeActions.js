export const newJokes = (data) => {
    return {
        type: 'Add jokes',
        payload: data,
    }
}