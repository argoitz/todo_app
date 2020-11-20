import "./TaskOverWorkWarning.scss";

function TaskOverworkWarning({ tasks }) {
  let tasksLeft = tasks.filter((t) => !t.completed).length;
  return tasksLeft >= 5 ? (
    <div className="warningMessage">Hay {tasksLeft} tareas por hacer</div>
  ) : (
    ""
  );
}

export default TaskOverworkWarning;
