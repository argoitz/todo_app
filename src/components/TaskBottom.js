
function TaskBottom(props){
    console.log(props.tasks);
    let completedTasks = props.tasks.filter(t => !t.completed).length;
    return (
        <div className="taskBottom">
            <div className="LBox">
                <b>{completedTasks}</b> Tasks left
            </div>
            <div className="RBox">
                <a href="#">Load more</a>
            </div>
        </div>
    )
}

export default TaskBottom;