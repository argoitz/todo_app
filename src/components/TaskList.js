import TaskItem from './taskItems';


function TaskList(props){

    const items = props.tasks.map(task => <TaskItem key={task.title} title={task.title} completed={task.completed}/>);
    return (
        <ul>
           {items}
        </ul>
    )
}

export default TaskList;