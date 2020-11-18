import './TaskItem.scss';

const changeTaskCompletedStatus = (e, id, taskObj) => {
    let tasks = taskObj.fullTasks;
    console.log(tasks);
    const thisTaskInState = tasks.find(task => task.id === id);
    thisTaskInState.completed = !thisTaskInState.completed;
    taskObj.setTasks([...tasks]);
};

function TaskItem({task, index, taskObj}){
    return (
        <li>
            <input type="checkbox" defaultChecked="false" checked={ task.completed } onChange={(e) => changeTaskCompletedStatus(e, task.id,taskObj)}></input>
            <label>
                {task.title} 
                {task.img? <img alt="User" src={task.img}></img> : undefined }
                {task.who? <span>{task.who}</span> : undefined } 
            </label>
        </li>
    )
}

export default TaskItem;