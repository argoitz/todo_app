import { useState } from "react";
import data from '../taskObject.json';

const useTasks = () => {
    console.log("Recorriendo script");
    const [tasks, setTasks] = useState(data.tasks);

    const getTasks = (tasks, page, pageSize) => tasks.slice(page*pageSize, (page + 1)*pageSize);
      
    //I add object of new task to add to taskToAdd and splice to add in first position 
    const [taskToAdd, setTaskToAdd] = useState('');
    if(taskToAdd !== ''){
        setTasks([taskToAdd, ...tasks]);
        setTaskToAdd('');
    }

    //Try to change completed status of task (I add key of tasks objet to checkTask and then I try to change the status )
    //Error: Not working
    const [checkTask, setCheckTask] = useState(false);
    if(checkTask !== false){
        console.log("Change task completed");
        tasks[checkTask].completed = !tasks[checkTask].completed;
        setTasks(tasks);
        setCheckTask(false);
    } 

    const [search, setSearch] = useState('');
    const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()));
    const numOfTasks = filteredTasks.length;
    const pageListSize = [5,10,15,20,25,30];
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(4);
    const pages = Math.ceil((numOfTasks / pageSize) - 1);

    return {
        tasks : {
            numOfTasks,
            fullTasks : tasks,
            getTasks,
            filteredTasks,
            setTaskToAdd,
            search,
            setSearch,
            setCheckTask
        },
        pagination: {
            page,
            setPage,
            pageSize,
            setPageSize,
            pages,
            pageListSize
        }
    };
}

export default useTasks;