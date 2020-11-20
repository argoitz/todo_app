import { useState, useEffect } from "react";

const useTasks = () => {
    console.log("Recorriendo script");
    const [tasks, setTasks] = useState([]);
    const getTasks = (tasks, page, pageSize) => tasks.slice(page*pageSize, (page + 1)*pageSize);

    const getDataFromUrl = async (limit = null, page = null) => {
            // fetch('https://jsonplaceholder.typicode.com/todos')
            // .then((res) => {
            //     let responseJson = res.json().then((jRes) => {
            //         console.log();
            //         setTasks(jRes);
            //     });
            // })
        if(limit) limit = "_limit="+limit;
        if(page) page = "_page="+page;
        if(limit && page) limit = limit+"&";

        try {
            console.log("GETTING DATA");
            let url = 'https://jsonplaceholder.typicode.com/todos?'+limit+page;
            console.log(url);
            let response = await fetch(url);
            let responseJson = await response.json();
            setTasks(responseJson);
           } catch(error) {
            console.error(error);
          }
    }

    useEffect(() => {
        setTimeout(() => {
            getDataFromUrl(5,2);
        }, 4000);
    }, []);    
        
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
