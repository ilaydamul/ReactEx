import './App.css';
import TodoItem from './components/TodoItem';
import { useEffect, useState } from 'react';

function App() {
  const [todoValue, setTodoValue] = useState('');
  const [list, setList] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list])


  function onCheckChange(data) {
    const updatedList = list.map(item => item.id === data.id ? { ...item, isChecked: !item.isChecked } : item)
    setList(updatedList);
  }

  function onBtnClick() {
    setList((prevList) => [...prevList, { id: Date.now(), title: todoValue, isChecked: false }]);
    setTodoValue('');
  }

  function inputOnChange(event) {
    setTodoValue(event.target.value);
  }

  function onDeleteTodo(data) {
    const updatedList = list.filter((item) => item.id !== data.id);
    setList(updatedList);
  }

  return (
    <>
      <section className="container my-5">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Todo ekle" aria-label="Username" value={todoValue} onChange={inputOnChange} aria-describedby="addon-wrapping" />
          <button className="btn btn-primary" onClick={onBtnClick}>Ekle</button>
        </div>
      </section>

      <section>
        <div className="container">

          <ul className="list-group">
            {
              list.map((listItem) => listItem.isChecked === false && <TodoItem data={listItem} key={listItem.id} onChange={() => onCheckChange(listItem)} onDeleteTodo={() => { onDeleteTodo(listItem) }} />)
            }
          </ul>

          <h2 className='my-3'>Tamamlanmış Todolar </h2>
          <ul className="list-group">
            {
              list.map((listItem) =>
                listItem.isChecked === true &&
                <TodoItem data={listItem} key={listItem.id} onChange={() => onCheckChange(listItem)} onDeleteTodo={() => { onDeleteTodo(listItem) }} />
              )
            }
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
