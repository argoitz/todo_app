function TaskItem(props){
    return (
        <li className={ props.completed ? 'doneTask': '' }>
            <input type="checkbox" defaultChecked={ props.completed }></input>
            {props.title}
        </li>
    )
}

export default TaskItem;