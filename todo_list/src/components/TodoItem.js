const TodoItem = ({ data, onChange, onDeleteTodo }) => {
    return (
        <>
            <li className="list-group-item d-flex align-items-center justify-content-between">
                <div>
                    <input className="form-check-input me-3" type="checkbox" checked={data.isChecked} id={data.id} onChange={onChange} />
                    <label className="form-check-label" htmlFor={data.id}>{data.title}</label>
                </div>
                <button className="btn btn-danger" onClick={onDeleteTodo}>Sil</button>
            </li>
        </>
    )
}

export default TodoItem;