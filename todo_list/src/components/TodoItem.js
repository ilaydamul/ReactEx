const TodoItem = ({ data, onChange }) => {

    return (
        <>
            <li className="list-group-item">
                <input className="form-check-input me-3" type="checkbox" checked={data.isChecked} id={data.id} onChange={onChange} />
                <label className="form-check-label" htmlFor={data.id}>{data.title}</label>
            </li>
        </>
    )
}

export default TodoItem;