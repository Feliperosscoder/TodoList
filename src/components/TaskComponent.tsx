import TaskAltIcon from "@mui/icons-material/TaskAlt";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from '@mui/icons-material/Edit';

import { TaskComponentProps } from "./types";
import { useEffect, useState } from "react";

const TaskComponent = ({
  task,
  index,
  handleTaskIsComplete,
  handleDeleteTask,
  handleEditTaks
}: TaskComponentProps) => {
  const handleComplete = () => {
    handleTaskIsComplete(task.id);
  };

  const handleDelete = () => {
    handleDeleteTask(task.id);
  };

  const handleEdition = () => {
    handleEditTaks(task.id)
  }

  const [maxLength, setMaxLength] = useState(40);

  useEffect(() => {
    
    const updateMaxLength = () => {
      if (window.innerWidth < 640) //sm
        setMaxLength(15)
      else if (window.innerWidth < 768) //md
        setMaxLength(20)
      else if (window.innerWidth < 1024) //lg
        setMaxLength(25)
      else if (window.innerWidth < 1180) //lg+
        setMaxLength(30)
      else if (window.innerWidth < 1280) //xl
        setMaxLength(40)
      else 
        setMaxLength(40); //xl+
      
    };

    window.addEventListener('resize', updateMaxLength);

    updateMaxLength();

    return () => {
      window.removeEventListener('resize', updateMaxLength);
    };
  }, []);

  
  return (
    <li
      key={task.id}
      className={`bg-[#25273C] flex justify-between items-center py-[1.9rem] px-[2rem] gap-[2rem] ${
        index !== 0 ? "border-t-[1px] border-[#585870]" : "rounded-lg"
      }`}
    >
      <div className="flex items-center gap-10">
        {task.isCompleted ? (
          <TaskAltIcon
            onClick={handleComplete}
            className="text-[#4F20A6] scale-150 cursor-pointer"
          />
        ) : (
          <RadioButtonUncheckedIcon
            onClick={handleComplete}
            className="text-[#4F20A6] scale-150 cursor-pointer"
          />
        )}
        <span
          className={`${
            task.isCompleted
              ? "text-xl text-[#8d8d96] line-through"
              : "text-xl text-[#E4E5F1]"
          }`}
          style={{
            maxWidth: `${maxLength}ch`,
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
          title={task.title}
        >
          
          {task.title.length > maxLength ? `${task.title.slice(0, maxLength)}...` : task.title}
        </span>
      </div>
      <span className="flex items-center text-xl text-[#421D8F] cursor-pointer gap-6">
        <EditIcon onClick={handleEdition}  className="scale-150"/>
        <ClearIcon onClick={handleDelete} className="scale-150" />
      </span>
    </li>
  );
};

export default TaskComponent;
