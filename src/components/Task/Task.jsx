const Task = (props) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            {props.title}: {props.desc}
            <button className="btn btn-danger">Salinti</button>
        </li>
    )
}

export default Task