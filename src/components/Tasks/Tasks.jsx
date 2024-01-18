import { useState } from "react"
import { useGlobalContext } from "../../context/TasksContext"
import AddTask from "../AddTask/AddTask"
import Task from "../Task/Task"
import Jokes from "../Jokes/Jokes"

const Tasks = () => {
    const { tasks, isOpen, handleForm } = useGlobalContext()

    return (
        <div className="container">
            <h2 className="m-5 text-center">Tasks list</h2>
            <div className="className m-3 text-center">
                {!isOpen && 
                <button 
                    className="btn btn-primary" 
                    onClick={() => handleForm(true)}>Add task</button>}
            </div>
            {isOpen ? (<AddTask/>) : (
                <ul className="list-group">
                    {tasks.length > 0 && tasks.map(task => 
                        <Task
                            id={task.id}
                            key={task.id} 
                            title={task.title} 
                            desc={task.description}
                        />
                    )}
                </ul>
            )}

            <Jokes />
            
        </div>
    )
}

export default Tasks