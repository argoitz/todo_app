import useTasks from '../../custom-hooks/useTasks';


let handleAddInputKeyPress = (e) => {
  if(e.key === 'Enter'){
    console.log(e.target.value);
  }
}

let handleSearchKeyPress = (e) => {
  console.log(e.target.value);
}

const Header = () => {
  const [tasks, numOfTasks, page, setPage, pageSize, setPageSize, pages] = useTasks();
  return (
      <>
        <h2>What do you want to do today?</h2>
        <div>
          <input className="addInput" type="text" onKeyPress={handleAddInputKeyPress} placeholder="Perss'Enter' to add task"></input>
          <input className="searchInput" type="text" onKeyPress={handleSearchKeyPress} placeholder="Search"></input>
          
        </div>
      </>
    )
}


export{
  Header,
  handleAddInputKeyPress,
} ;