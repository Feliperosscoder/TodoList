import TaskComponent from "./TaskComponent";
import { TaskContainerProps } from "./types";
import Filters from "./Filters";
import ButtonsPage from "./pageButtons";

const TaskContainer = ({
  tasks,
  filterActive,
  currentTasks,
  handleTaskIsComplete,
  handleDeleteTask,
  setFilterActive,
  tasksPerPage,
  currentPage,
  indexOfLastTask,
  setCurrentPage,
  clearTasksCompleted,
  filteredTasks
}: TaskContainerProps) => {
  return (
    <ul className="absolute top-[35%] w-2/5">
      {filterActive === "all" &&
        currentTasks.map((task, index) => (
          <TaskComponent
            task={task}
            index={index}
            handleTaskIsComplete={handleTaskIsComplete}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      {filterActive === "active" &&
        currentTasks.map((task, index) => (
          <TaskComponent
            task={task}
            index={index}
            handleTaskIsComplete={handleTaskIsComplete}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      {filterActive === "completed" &&
        currentTasks.map((task, index) => (
          <TaskComponent
            task={task}
            index={index}
            handleTaskIsComplete={handleTaskIsComplete}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      <Filters
        tasks={tasks}
        filterActive={filterActive}
        setFilterActive={setFilterActive}
        clearTasksCompleted={clearTasksCompleted}
      />
      <ButtonsPage
        tasks={tasks}
        tasksPerPage={tasksPerPage}
        currentPage={currentPage}
        indexOfLastTask={indexOfLastTask}
        setCurrentPage={setCurrentPage}
        filteredTasks={filteredTasks}
      />
    </ul>
  );
};

export default TaskContainer;
