import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, handleAddInputKeyPress } from './components/Header/Header';
import TaskList from './components/TaskList';
import Footer from './components/footer';
import TaskOverWorkWarning from './components/TaskOverWorkWarning';
import useTasks from './custom-hooks/useTasks';

const getTasks = (tasks, page, pageSize) => {
  return tasks.slice(page*pageSize, (page + 1)*pageSize);
}

function App() {
  const {tasks, pagination} = useTasks();
  

  return (
    <div className="todoBox">
      <Header tasks= {tasks} pagination={pagination}/>
      <TaskOverWorkWarning tasks={tasks.fullTasks}/>
      <TaskList tasks={getTasks(tasks.filteredTasks,pagination.page,pagination.pageSize)} taskObj={tasks}/>
      <Footer tasks={tasks} pagination={pagination}/>
    </div>
  );
}

export default App;
