import { useGlobalContext } from "../../context/TasksContext"
import { useState } from "react"

const AddTask = () => {
    const { addTask, handleForm } = useGlobalContext()
    const [newTask, setNewTask] = useState({
        id: '',
        title: '',
        description: ''
    })

    const handleChange = (e) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value, id: Date.now()})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(newTask)
        handleForm(false)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <input onChange={handleChange} name="title" type="text" placeholder="title" className="form-control" />
            </div>
            <div className="form-group mb-3">
                <textarea onChange={handleChange} name="description" placeholder="Description" className="form-control"></textarea>
            </div>
            <div className="form-group">
               <button className="btn btn-primary">Add</button>
            </div>
        </form>
    )
}

export default AddTask