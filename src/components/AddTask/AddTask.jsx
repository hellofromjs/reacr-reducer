const AddTask = () => {
    return (
        <form className="form">
            <div className="form-group">
                <input type="text" placeholder="title" className="form-control" />
            </div>
            <div className="form-group">
                <textarea placeholder="Description" className="form-control"></textarea>
            </div>
            <div className="form-group">
               <button className="btn btn-primary">Add</button>
            </div>
        </form>
    )
}

export default AddTask