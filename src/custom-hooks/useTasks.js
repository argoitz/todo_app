import { useState, useEffect } from "react";
import data from '../taskObject.json';

const getTasks = (tasks, page, pageSize) => tasks.slice(page*pageSize, (page + 1)*pageSize);

const useTasks = () => {
    console.log("Recorriendo script");
    const [tasks, setTasks] = useState([]);
    const getTasks = (tasks, page, pageSize) => tasks.slice(page*pageSize, (page + 1)*pageSize);

    const getDataFromUrl = async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/todos');
            let responseJson = await response.json();
            setTasks(responseJson);
           } catch(error) {
            console.error(error);
          }
    }

    useEffect(() => {
        setTimeout(() => {
            getDataFromUrl()
        }, 2000);
    }, []);

    tasks === undefined || tasks.length == 0? console.log("TASKS ARE EMPTY") : console.log("TASKS ARE NOT EMPTY");
    

        
    //Store searching word in localStorage
    const useLocalStorageSearch = (defaultVal, key) => {
        //check if localStorage key exist and get value or set default value
        const [val, setVal] = useState(() => {
            const localValue = window.localStorage.getItem(key);
            return localValue !== null? JSON.parse(localValue) : defaultVal
        });

        //If new word is set, store in localStorage
        useEffect(() => {
            window.localStorage.setItem(key, JSON.stringify(val));
        }, [key, val]);

        return [val, setVal];
    };
    
    const [search, setSearch] = useLocalStorageSearch('', 'search');


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
