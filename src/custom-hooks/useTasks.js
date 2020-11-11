import { useState } from "react";
import data from '../taskObject.json';

const useTasks = () => {
    const tasks = data.tasks;
    const numOfTasks = tasks.length;
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(4);
    const pages = Math.ceil((numOfTasks / pageSize) - 1);

    return [tasks, numOfTasks, page, setPage, pageSize, setPageSize, pages];
}

export default useTasks;