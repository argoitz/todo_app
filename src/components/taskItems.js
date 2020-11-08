function TaskItem(props){
    return (
        <li className={ props.completed ? 'doneTask': '' }>
            <input type="checkbox" defaultChecked="false" checked={ props.completed }></input>
            <label>{props.title}</label>
        </li>
    )
}

export default TaskItem;