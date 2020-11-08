import React from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton';
import TaskList from './components/TaskList';
import TaskBottom from './components/TaskBottom';
import TaskOverWorkWarning from './components/TaskOverWorkWarning';
import data from './taskObject.json';

const getTasks = (tasks, page, pageSize) => {
  return tasks.slice(page*pageSize, (page + 1)*pageSize);
}

function App() {

  const tasks = data.tasks;
  const numOfTasks = tasks.length;
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(4);
  const pages = Math.ceil((numOfTasks / pageSize) - 1);

  console.log(getTasks(tasks,page,pageSize));

  const handleClick = () => {
    console.log("CLICKED");
  }
  
  /*
    - task Who (nombre, foto de la persona) e imprimir esta foto y nombre en los items
    - Overword warning: add aviso si tenemos más de 5 tareas por hacer
    - "Paginación estática" task una lista larga y tendremos una variable para controlar las tareas q vemos "const page = 1";
  */

  return (
    <div className="todoBox">
      <h2>What do you want to do today?</h2>
      <input type="text"></input>
      <select onChange={(e) => setPageSize(e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <TaskOverWorkWarning tasks={tasks}/>
      <TaskList tasks={getTasks(tasks,page,pageSize)}/>
      <TaskBottom tasks={tasks}/>

      <div className="buttonBox">
        {page > 0 && <button onClick={() => setPage(page - 1)}>Prev Page</button>}
        {page < pages && <button onClick={() => setPage(page + 1)}>Next Page</button>}
      </div>
    </div>
  );
}

export default App;
