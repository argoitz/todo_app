
function TaskBottom(props){
    console.log(props.tasks);
    let completedTasks = props.tasks.filter(t => !t.completed);
    return (
        <div className="taskBottom">
            <div className="LBox">
                <b>{completedTasks.length}</b> Tasks left
            </div>
            <div className="RBox">
                <a>Load more</a>
            </div>
        </div>
    )
}

export default TaskBottom;