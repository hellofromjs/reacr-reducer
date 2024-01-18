import { useContext, useReducer } from "react";
import TodoReducer from "../reducers/TodoReducer";
import React from "react";
import { newTask, deleteTask, openForm } from "../actions/TodoActions";
import { newJokes } from "../actions/JokeActions";

const AppContext = React.createContext();

const initialState = {
    tasks: [
        {
            id: 1,
            title: 'Test task 1',
            description: 'Test task 1 description'
        },
        {
            id: 2,
            title: 'Test task 2',
            description: 'Test task 2 description'
        },
        {
            id: 3,
            title: 'Test task 3',
            description: 'Test task 3 description'
        },
    ],
    isOpen: false,
    jokes: [],
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState)

    const addTask = (data) => {
        dispatch(newTask(data))
    }

    const handleForm = (formStatus) => {
        dispatch(openForm(formStatus))
    }

    const removeTask = (id) => {
        dispatch(deleteTask(id))
    }

    const addJokes = (data) => {
        dispatch(newJokes(data))
    }

    return (
        <AppContext.Provider value={{
            ...state,
            addTask,
            handleForm,
            removeTask,
            addJokes,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider }

