import { useState } from 'react';
import './App.css';
import NewTodoForm from './Components/NewTodoForm';
import Todos from './Components/Todos';
import todo from './Models/Todo';
import './Components/TodoStyle.css'

function App() {

  const updateTime=()=>{
    const updateT=new Date().toLocaleTimeString();
    setTime(updateT);
  }

  setInterval(updateTime,1000);

  const nowTime=new Date().toLocaleTimeString();
  const nowDate=new Date().toLocaleDateString();
  const [todos, setTodos] = useState<todo[]>([]);
  const [time,setTime]=useState(nowTime);
  const date = nowDate.replaceAll('/', '-');


  const addTodoHandler = (TodoText: string) => {
    const newTodo = new todo(TodoText);
    setTodos((prevTodos) => { return prevTodos.concat(newTodo) })
  };

  const removeTodoHandler = (todoId:string)=>{
    setTodos((prevTodos)=>{return prevTodos.filter((todo)=>{return todo.id!==todoId})});
  };

  return (
    <div className="App Card shadow-5">
      <div className='main-title'>
        <h1 >MY TODO's</h1>
        <h5 >{date} {time}</h5>
      </div>

      <NewTodoForm addNewTodo={addTodoHandler} />
      <Todos items={todos} removeTodo={removeTodoHandler}/>

    </div>
  );
}

export default App;
