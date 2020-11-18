import './Footer.scss';

function Footer({tasks, pagination}){
    let completedTasks = tasks.fullTasks.filter(t => !t.completed).length;
    return (
        <>
        <div className="taskBottom">
            <div className="LBox">
            <b>{completedTasks} of {tasks.numOfTasks}</b> Tasks left
            </div>
            <div className="RBox">
                <a href="#">Load more</a>
            </div>
        </div>

        <div className="pagination_box">
            <div> 
            {
                pagination.page > 0 
                && 
                <button onClick={() => pagination.setPage(pagination.page - 1)}> Prev Page</button>
            }
            </div>

            <div>{pagination.page + 1} page of {pagination.pages + 1}</div>

            <div>
            {
                pagination.page < pagination.pages 
                && 
                <button onClick={() => pagination.setPage(pagination.page + 1)}>Next Page</button>
            }
            </div>
        </div>
      </>
    )
}

export default Footer;