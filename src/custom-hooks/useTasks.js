import { useState } from "react";
import data from '../taskObject.json';

const useTasks = () => {
    console.log("Recorriendo script");
    const [tasks, setTasks] = useState(data.tasks);

    const getTasks = (tasks, page, pageSize) => tasks.slice(page*pageSize, (page + 1)*pageSize);

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
            setTasks,
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
