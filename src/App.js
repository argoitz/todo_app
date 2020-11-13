import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import TaskOverWorkWarning from './components/TaskList/TaskOverWorkWarning/TaskOverWorkWarning';
import useTasks from './custom-hooks/useTasks';



function App() {
  const {tasks, pagination} = useTasks();

  return (
    <div className="todoBox">
      <Header tasks= {tasks} pagination={pagination}/>
      <TaskOverWorkWarning tasks={tasks.fullTasks}/>
      <TaskList tasks={tasks.getTasks(tasks.filteredTasks,pagination.page,pagination.pageSize)} taskObj={tasks}/>
      <Footer tasks={tasks} pagination={pagination}/>
    </div>
  );
}

export default App;
