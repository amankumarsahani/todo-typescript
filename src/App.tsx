import { useState } from 'react';
import './App.css';
import NewTodoForm from './Components/NewTodoForm';
import Todos from './Components/Todos';
import todo from './Models/Todo';
import './Components/TodoStyle.css'

function App() {
  const [todos, setTodos] = useState<todo[]>([]);
  const date = new Date().toLocaleDateString().replaceAll('/', '-');

  const addTodoHandler = (TodoText: string) => {
    const newTodo = new todo(TodoText);
    setTodos((prevTodos) => { return prevTodos.concat(newTodo) })
  };
  console.log(date);
  return (
    <div className="App Card">
      <div className='main-title'>
        <h1 >MY TODO's</h1>
        <h5 >{date}</h5>
      </div>

      <NewTodoForm addNewTodo={addTodoHandler} />
      <Todos items={todos} />

    </div>
  );
}

export default App;
