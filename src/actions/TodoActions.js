export const newTask = (data) => {
    return {
        type: 'Add task',
        payload: data,
    }
}

export const deleteTask = (id) => {
    return {
        type: 'Remove task',
        patload: id,
    }
}