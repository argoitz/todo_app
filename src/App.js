import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import TaskList from './components/Body/TaskList';
import Footer from './components/Footer/Footer';
import TaskOverWorkWarning from './components/Body/TaskOverWorkWarning/TaskOverWorkWarning';
import useTasks from './custom-hooks/useTasks';
import { ImSpinner9 } from "react-icons/im";


function App() {
  const {tasks, pagination} = useTasks();

  return (
    <div className="todoBox">
      <Header tasks= {tasks} pagination={pagination}/>
     { tasks.numOfTasks === 0?
      <div className="LoadingBox"> Loading data <ImSpinner9 className="spin-icon" /> </div>
      :
      <>
        <TaskOverWorkWarning tasks={tasks.fullTasks}/>  
        <TaskList tasks={tasks.getTasks(tasks.filteredTasks,pagination.page,pagination.pageSize)} taskObj={tasks}/>
        <Footer tasks={tasks} pagination={pagination}/>
      </>
    }
    </div>
  );
}

export default App;
