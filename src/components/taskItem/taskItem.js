import './taskItem.scss';

const changeTaskCompletedStatus = (e, index, taskObj) => {
    let tasks = taskObj.fullTasks;
    console.log(e.target.checked);
    taskObj.setCheckTask(index);
};

function TaskItem({task, index, taskObj}){
    return (
        <li>
            <input type="checkbox" defaultChecked="false" checked={ task.completed } onChange={(e) => changeTaskCompletedStatus(e, index,taskObj)}></input>
            <label>
                {task.title} 
                {task.img? <img src={task.img}></img> : undefined }
                {task.who? <span>{task.who}</span> : undefined } 
            </label>
        </li>
    )
}

export default TaskItem;