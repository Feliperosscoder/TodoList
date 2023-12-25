import AddIconTask from "./components/AddIcon";
import Input from "./components/Input";
import IconTask from "./components/IconTask";
import TaskContainer from "./components/TaskContainer";
import useTaskFunctions from "./hooks/useTaskFunctions";

function App() {
  const {
    inputValue,
    inputError,
    filterActive,
    setFilterActive,
    currentPage,
    setCurrentPage,
    tasks,
    tasksPerPage,
    handleAddTask,
    handleTaskIsComplete,
    indexOfLastTask,
    handleDeleteTask,
    handleClickEnter,
    clearTasksCompleted,
    filteredTasks,
    currentTasks,
  } = useTaskFunctions();
  
  console.log(currentPage);
  

  return (
    <div className="h-screen w-screen bg-[#1F1F1F] mx-auto font-montserrat">
      <div className="h-2/5 w-full bg-gradient-to-r from-[#4F20A6] to-[#2A1766] flex justify-center">
        <h1 className="text-[56px] font-bold text-[#E4E5F1] tracking-[10px] relative top-20">
          TODO LIST
        </h1>
        <form className="bg-[#24273D] flex justify-between items-center px-8 py-4 gap-[2rem] absolute top-[20%] rounded-lg w-2/5">
          <AddIconTask handleAddTask={handleAddTask} />
          <Input inputValue={inputValue} handleClickEnter={handleClickEnter} />
        </form>
        <span
          className={`${
            inputError ? "warning absolute top-[28%] text-red-600" : "hidden"
          }`}
        >
          Você precisa digitar o título da sua task!
        </span>
        <div className="absolute top-[50%] text-center">
          <IconTask tasks={tasks} />
        </div>
        <TaskContainer
          tasks={tasks}
          filterActive={filterActive}
          filteredTasks={filteredTasks}
          currentTasks={currentTasks}
          tasksPerPage={tasksPerPage}
          currentPage={currentPage}
          indexOfLastTask={indexOfLastTask}
          handleTaskIsComplete={handleTaskIsComplete}
          handleDeleteTask={handleDeleteTask}
          setFilterActive={setFilterActive}
          clearTasksCompleted={clearTasksCompleted}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
