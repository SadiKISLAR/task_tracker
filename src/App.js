import './App.css';
import AddTask from './components/add task/AddTask';
import Button from './components/header/Button';
import Header from './components/header/Header';
import Task from './components/tasks/Task';

function App() {
  return (
    <div className='App-header'>
      <div className="container">
        <Header/>
        <Button/>
        <AddTask/>
        <Task/>
      </div>
    </div>       
  );
}

export default App;
