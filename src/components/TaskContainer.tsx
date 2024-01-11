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
  filteredTasks,
  handleEditTaks
}: TaskContainerProps) => {
  return (
    <ul className="absolute top-[35%] w-4/5 lg:w-3/5 2xl:w-2/5">
      {filterActive === "all" &&
        currentTasks.map((task, index) => (
          <TaskComponent
            task={task}
            index={index}
            handleTaskIsComplete={handleTaskIsComplete}
            handleDeleteTask={handleDeleteTask}
            handleEditTaks={handleEditTaks}
          />
        ))}
      {filterActive === "active" &&
        currentTasks.map((task, index) => (
          <TaskComponent
            task={task}
            index={index}
            handleTaskIsComplete={handleTaskIsComplete}
            handleDeleteTask={handleDeleteTask}
            handleEditTaks={handleEditTaks}
          />
        ))}
      {filterActive === "completed" &&
        currentTasks.map((task, index) => (
          <TaskComponent
            task={task}
            index={index}
            handleTaskIsComplete={handleTaskIsComplete}
            handleDeleteTask={handleDeleteTask}
            handleEditTaks={handleEditTaks}
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
