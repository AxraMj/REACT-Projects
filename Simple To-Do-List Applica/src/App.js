import React, { useState } from 'react';
import style from './style.css';

function App() {
  const [displayTODO, setDisplayTODO] = useState([]);
  const [inputList, setInputList] = useState("");

  const inputChange = (e) => {
    setInputList(e.target.value);
  };

  const addTodos = () => {
    if (inputList.trim()) {
      setDisplayTODO([...displayTODO, { text: inputList, completed: false }]);
      setInputList('');
    }
  };

  const deleteTodo = (index) => {
    setDisplayTODO(displayTODO.filter((_, i) => i !== index));
  };

  return (
    <div className='app'>
      <div className='main_heading'>
        <h1>ToDo List</h1>
      </div>

      <div className='sub_heading'>
        <h2>Wednesday 🤕</h2>
      </div>

      <div className='input_container'>
        <input
          value={inputList}
          onChange={inputChange}
          type='text'
          placeholder='🖊️ Add Items..'
        />
        <i onClick={addTodos} className="fas fa-plus"></i>
      </div>

      <div className='todos_container'>
        {displayTODO.map((todo, index) => (
          <div className='todo' key={index}>
            <div className='left'>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => {
                  const newTodos = [...displayTODO];
                  newTodos[index].completed = !newTodos[index].completed;
                  setDisplayTODO(newTodos);
                }}
              />
              <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </p>
            </div>

            <div className="right">
              <i className="fas fa-times" onClick={() => deleteTodo(index)}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
