import { useState } from "react";
import data from '../taskObject.json';

const getTasks = (tasks, page, pageSize) => tasks.slice(page*pageSize, (page + 1)*pageSize);

const useTasks = () => {
    console.log("Recorriendo script");
    const [tasks, setTasks] = useState(data.tasks);
    const [search, setSearch] = useState('');
    const [taskToAdd, setTaskToAdd] = useState('');
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(4);
    const [checkTask, setCheckTask] = useState(false);

    //I add object of new task to add to taskToAdd and splice to add in first position
    if(taskToAdd !== ''){
        setTasks([taskToAdd, ...tasks]);
        setTaskToAdd('');
    }

    //Try to change completed status of task (I add key of tasks objet to checkTask and then I try to change the status )
    //Error: Not working
    if(checkTask !== false){
        console.log("Change task completed");
        tasks[checkTask].completed = !tasks[checkTask].completed;
        setTasks(tasks);
        setCheckTask(false);
    }

    const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()));
    const numOfTasks = filteredTasks.length;
    const pageListSize = [5,10,15,20,25,30];
    const pages = Math.ceil((numOfTasks / pageSize) - 1);

    return {
        tasks : {
            numOfTasks,
            fullTasks : tasks,
            pageTasks: getTasks(tasks, page, pageSize),
            filteredTasks,
            search,
            setSearch,
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
