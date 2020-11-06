import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton';
import TaskList from './components/TaskList';
import TaskBottom from './components/TaskBottom';

const tasks = [
  {
    "title": "Hacer la compra",
    "completed": false
  },
  {
    "title": "Limpiar el coche",
    "completed": true
  },
  {
    "title": "Otra cosa",
    "completed": false
  },
];

function App() {

  const handleClick = () => {
    console.log("CLICKED");
  }

  return (
    <div className="todoBox">
      <h2>What do you want to do today?</h2>
      <input type="text"></input>
      <TaskList tasks={tasks}/>
      <TaskBottom tasks={tasks}/>
      

    </div>
  );
}

export default App;
