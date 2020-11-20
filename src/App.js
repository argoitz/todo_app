import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./App.scss";
import { Header } from "./components/Header/Header";
import TaskList from "./components/Body/TaskList";
import Footer from "./components/Footer/Footer";
import TaskOverWorkWarning from "./components/Body/TaskOverWorkWarning/TaskOverWorkWarning";
import useTasks from "./custom-hooks/useTasks";
import { ImSpinner9 } from "react-icons/im";

function App() {
  const { tasks, pagination } = useTasks();

  return (
    <div className="todoBox">
      <Header tasks={tasks} pagination={pagination} />
      {tasks.numOfTasks === 0 ? (
        <>
          <SkeletonTheme color="#fa8072" highlightColor="#e96354">
            <Skeleton height={40} />
          </SkeletonTheme>
          <Skeleton height={50} count={5} />
          <Skeleton height={20} width={120} style={{ margin: "10px 0px" }} />
          <Skeleton
            height={20}
            width={120}
            style={{ margin: "10px 0px", float: "right" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Skeleton height={20} width={120} />
            <Skeleton height={20} width={120} />
            <Skeleton height={20} width={120} />
          </div>
        </>
      ) : (
        <>
          <TaskOverWorkWarning tasks={tasks.fullTasks} />
          <TaskList
            tasks={tasks.getTasks(
              tasks.filteredTasks,
              pagination.page,
              pagination.pageSize
            )}
            taskObj={tasks}
          />
          <Footer tasks={tasks} pagination={pagination} />
        </>
      )}
    </div>
  );
}

export default App;
