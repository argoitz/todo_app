function TaskOverworkWarning({tasks}){
    let tasksLeft = tasks.filter(t => !t.completed).length;
    return (tasksLeft >= 5)? <div className="warningMessage">Hay 5 o mas tareas por hacer</div> : '';
};

export default TaskOverworkWarning;