import { useGlobalContext } from "../../context/TasksContext"

const Task = (props) => {
    const { removeTask } = useGlobalContext()
    return (
        <li className="list-group-item d-flex justify-content-between">
            {props.title}: {props.desc}
            <button onClick={() => removeTask(props.id)} className="btn btn-danger">Salinti</button>
        </li>
    )
}

export default Task