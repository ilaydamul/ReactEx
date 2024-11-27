import './App.css';
import TodoItem from './components/TodoItem';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([
    {
      "id": 1,
      "title": "Complete React project",
      "isChecked": false
    },
    {
      "id": 2,
      "title": "Write blog post",
      "isChecked": true
    },
    {
      "id": 3,
      "title": "Go grocery shopping",
      "isChecked": false
    },
    {
      "id": 4,
      "title": "Clean the house",
      "isChecked": true
    },
    {
      "id": 5,
      "title": "Read a book",
      "isChecked": false
    }
  ])

  function onCheckChange(data) {
    const updatedList = list.map(item => item.id === data.id ? { ...item, isChecked: !item.isChecked } : item)
    setList(updatedList);
  }


  return (
    <>
      <section className="container my-5">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Todo ekle" aria-label="Username" aria-describedby="addon-wrapping" />
          <button className="btn btn-primary">Ekle</button>
        </div>
      </section>

      <section>
        <div className="container">
          <ul className="list-group">
            {
              list.map((listItem) => <TodoItem data={listItem} key={listItem.id} onChange={() => onCheckChange(listItem)} />)
            }
          </ul>
        </div>
      </section>

    </>
  );
}

export default App;
