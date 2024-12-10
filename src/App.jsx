import { useState } from 'react'
import reactLogo from './assets/react.svg'
import guitarLogo from './assets/guitar.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text, complete: false }]);
        console.log(text);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : todo
            )
        );
    }

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.complete));
    }
    

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addTodo(event.target.value);
            event.target.value = '';
        }
    };

  return (
    <>
      <div>
        <a href="https://www.sweetwater.com/store/search?s=red+guitars" target="_blank">
          <img src={guitarLogo} className="logo react" />
        </a>
      </div>


      <div className="App">
      
        <h1>To-Do List</h1>
          <h2>by Patrick Ruckman</h2>

          <input type="text" onKeyDown={handleKeyDown} />
              <ul>
                {todos.map((todoItem) => (
                  <li className="todoItem" key={todoItem.id}>
                    <input
                      type="checkbox"
                      checked={todoItem.completed}
                      onChange={() => toggleComplete(todoItem.id)}
                    />
                    <span>{todoItem.text}</span>
                    <button className="deleteItem" onClick={() => removeTodo(todoItem.id)}>Delete</button>
                  </li>
                  ))}
              </ul>

              <button className="clearCompletedItems" onClick={clearCompleted}>Clear Completed</button>

      </div>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       {/*<p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>*/}
      </div>

      


      {/*<p className="read-the-docs">
      Click on the Vite and React logos to learn more
      </p>*/}
       
    </>
  )
}

export default App
