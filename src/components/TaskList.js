import TaskItem from './taskItems';


function TaskList( {tasks} ){
    //en vez de poner props, con las llaves {tasks} se coje el key del objeto que se quiere utilizar
    //Con {...task} enviamos los parametros que tiene dentro el objeto "task" de esta manera "title={task.title} completed={task.completed}"
    const items = tasks.map(task => <TaskItem {...task}/>);
    return (
        <ul>
           {items}
        </ul>
    )
}

export default TaskList;