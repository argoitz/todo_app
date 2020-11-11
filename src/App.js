import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, handleAddInputKeyPress } from './components/Header/Header';
import TaskList from './components/TaskList';
import TaskBottom from './components/TaskBottom';
import TaskOverWorkWarning from './components/TaskOverWorkWarning';
import useTasks from './custom-hooks/useTasks';

const getTasks = (tasks, page, pageSize) => {
  return tasks.slice(page*pageSize, (page + 1)*pageSize);
}

function App() {
  const [tasks, numOfTasks, page, setPage, pageSize, setPageSize, pages] = useTasks();
  
  return (
    <div className="todoBox">
      <Header/>
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
