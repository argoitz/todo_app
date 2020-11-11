import './taskItem.scss';

function TaskItem(props){
    return (
        <li className={ props.completed ? 'doneTask': '' }>
            <input type="checkbox" defaultChecked="false" checked={ props.completed }></input>
            <label>
                {props.title} 
                {props.img? <img src={props.img}></img> : undefined }
                {props.who? <span>{props.who}</span> : undefined } 
            </label>
        </li>
    )
}

export default TaskItem;