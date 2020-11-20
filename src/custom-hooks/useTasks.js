import { useState, useEffect } from "react";

const useTasks = () => {
  console.log("########### \n Runing Script \n########### \n");
  const [tasks, setTasks] = useState([]);

  const getTasks = (tasks, page, pageSize) =>
    tasks.slice(page * pageSize, (page + 1) * pageSize);

  const getDataFromUrl = async (page = null, limit = null) => {
    if (limit) limit = "_limit=" + limit;
    if (page) page = "_page=" + page;
    if (limit && page) limit = limit + "&";

    try {
      let url = "https://jsonplaceholder.typicode.com/todos?" + limit + page;
      console.log(url);
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  //Store searching word in localStorage
  const useLocalStorageSearch = (defaultVal, key) => {
    //check if localStorage key exist and get value or set default value
    const [val, setVal] = useState(() => {
      const localValue = window.localStorage.getItem(key);
      return localValue !== null ? JSON.parse(localValue) : defaultVal;
    });

    //If new word is set, store in localStorage
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(val));
    }, [key, val]);

    return [val, setVal];
  };

  const [search, setSearch] = useLocalStorageSearch("", "search");

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );
  const numOfTasks = filteredTasks.length;
  const pageListSize = [5, 10, 15, 20, 25, 30];
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const pages = Math.ceil(numOfTasks / pageSize - 1);

  useEffect(() => {
    setTimeout(() => {
      console.log("// - GET FULL DATA");
      getDataFromUrl().then((res) => setTasks(res));
    }, 4000);
  }, []);

  useEffect(() => {
    console.log("// - GET DATA ON CHANGE PAGE OR SIZE");
    //Execute on change page, only for: (run on page change or size change test)
    getDataFromUrl(page + 1, pageSize).then((res) => console.log(res));
  }, [page, pageSize]);

  return {
    tasks: {
      numOfTasks,
      fullTasks: tasks,
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
      pageListSize,
    },
  };
};

export default useTasks;
