import './Header.scss';

const handleAddInputKeyPress = (e, setTasks, tasks) => {
  if(e.key === 'Enter'){
    let taskToAdd = {title: e.target.value, completed: false, who: "Me", id: Math.round(Math.random()*10000000)};
    setTasks([taskToAdd, ...tasks]);
    e.target.value = "";
  }
}

let handleSearchKeyPress = (e, setSearch) => {
  if(e.code === 'Enter'){
    setSearch(e.target.value);
    e.target.value = "";
  }
}

const Header = ({tasks, pagination}) => {
  return (
      <>
        <h2>What do you want to do today?</h2>

        <div className="Header">
          <input className="addInput" type="text" onKeyPress={(e) =>  {
            handleAddInputKeyPress(e, tasks.setTasks, tasks.fullTasks)
          } }  placeholder="Perss'Enter' to add task" />
          <input className="searchInput" type="text" placeholder="Search" onKeyPress={(e) => handleSearchKeyPress(e, tasks.setSearch) } ></input>
        </div>

        {tasks.search !== '' && <div>
          Searching '<b>{tasks.search}</b>'
          <button onClick={() => tasks.setSearch('') }>Clear</button>
        </div> }

        <div className="pageSizeBox">
          <label>Page Size</label>
          <select onChange={(e) => {pagination.setPageSize(e.target.value); pagination.setPage(0)}}>
            {pagination.pageListSize.map((x) => <option value={x}>{x}</option> )}
          </select>
        </div>
      </>
    )
}


export{
  Header,
  handleAddInputKeyPress,
} ;
