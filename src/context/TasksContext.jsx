import { useContext, useReducer } from "react";
import TodoReducer from "../reducers/TodoReducer";
import React from "react";
import { newTask, deleteTask } from "../actions/TodoActions";

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
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState)
    
    const addTask = (data) => {
        dispatch(newTask(data))
    }

    const handleForm = (data) => {
        
    }

    return (
        <AppContext.Provider value={{
            ...state,
            addTask,
            handleForm,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider}

