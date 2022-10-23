import { useState } from 'react';
import './App.css';
import AddTask from './components/add task/AddTask';
import Button from './components/header/Button';
import Header from './components/header/Header';
import Task from './components/tasks/Task';

function App() {
  const [close, setClose] = useState(true);
  const [todo, setTodo] = useState(true);
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClose = (e) => {
    e.preventDefault();
    setClose((prev) => (prev = !prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "" && date !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo, date }, ...todos]);
      setTodo("");
      setDate("");
    }
  };
  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };
  return (
    <div className='App-header'>
      <div className="container">
        <Header/>
        <Button onClick={handleClose}
          {...close ? "close" : "show"}/>
        <AddTask handleSubmit={handleSubmit}
              todo={todo}
              date={date}
              setTodo={setTodo}
              setDate={setDate}
            />
        <Task todos={todos} complateTodo={complateTodo} handleDelete={handleDelete}/>
      </div>
    </div>       
  );
}

export default App;
