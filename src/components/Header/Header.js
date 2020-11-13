import './Header.scss';

const handleAddInputKeyPress = (e, setTaskToAdd) => {
  if(e.key === 'Enter'){
    let newTask = {title: e.target.value, completed: false, who: "Me"};
    setTaskToAdd(newTask);
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
          <input className="addInput" type="text" onKeyPress={(e) =>  handleAddInputKeyPress(e, tasks.setTaskToAdd) }  placeholder="Perss'Enter' to add task"></input>
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