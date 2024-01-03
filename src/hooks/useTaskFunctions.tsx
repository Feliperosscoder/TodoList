import { useCallback, useMemo, useRef, useState } from "react";

import React from "react";

const useTaskFunctions = () => {
  const inputValue = useRef<HTMLInputElement>(null);
  const [inputError, setInputError] = useState(false);
  const [filterActive, setFilterActive] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskEdit, setTaskEdit] = useState<Task | null>();
  const tasksPerPage = 4;

  interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
  }

  const handleTaskIsComplete = (taskId: number) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
    });
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== taskId;
      })
    );

    if ((tasks.length - 1) % 4 === 0 && tasks.length - 1 !== 0) {
      if (tasks.length - 1 === 4) {
        return setCurrentPage(1);
      }
      console.log("AAAAAAAAA");

      setCurrentPage(() => currentPage - 1);
    }
  };

  const handleEditTaks = (taskId: number) => {
    const task: Task | undefined = tasks.find((task) => {
      return task.id === taskId;
    });
    if (!task) return;
    inputValue.current!.value = task.title;
    setTaskEdit(task);
  };

  const updateTask = ({ id, isCompleted }: Task) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            title: inputValue.current!.value,
            isCompleted,
          }
        : task
    );

    setTasks(updatedTasks);
    inputValue.current!.value = "";
    setTaskEdit(null);
  };

  const handleClickEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (taskEdit) {
        console.log("Entrei");
        return updateTask(taskEdit);
      }
      handleAddTask();
    } else {
      setInputError(false);
    }
  };

  const handleAddTask = useCallback(() => {
    setInputError(false);
    if (taskEdit) return;
    const inputConfirmed = (inputValue.current?.value ?? "").trim().length > 0;
    if (inputConfirmed === false) {
      return setInputError(true);
    }

    const newTask: Task = {
      id: tasks.length + 1,
      title: inputValue.current!.value,
      isCompleted: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    inputValue.current?.focus();
    inputValue.current!.value = "";
  }, [taskEdit, tasks.length]);

  const clearTasksCompleted = () => {
    const clearedTasks = tasks.filter((task) => !task.isCompleted);
    setTasks(clearedTasks);

    if ((tasks.length - 1) % 4 === 0 && tasks.length - 1 !== 0) {
      if (tasks.length - 1 === 4) {
        return setCurrentPage(1);
      }

      setCurrentPage(1);
    }
    setFilterActive("all");
  };

  const filteredTasks = useMemo(() => {
    if (filterActive === "active") {
      return tasks.filter((task) => !task.isCompleted);
    } else if (filterActive === "completed") {
      return tasks.filter((task) => task.isCompleted);
    } else {
      return tasks;
    }
  }, [filterActive, tasks]);

  const memoizedValues = useMemo(() => {
    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    let currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);
    currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

    return { currentTasks, indexOfLastTask };
  }, [tasks, currentPage, tasksPerPage, filteredTasks]);

  const { currentTasks, indexOfLastTask } = memoizedValues;

  return {
    inputValue,
    inputError,
    setInputError,
    filterActive,
    setFilterActive,
    currentPage,
    setCurrentPage,
    tasks,
    setTasks,
    tasksPerPage,
    handleAddTask,
    handleTaskIsComplete,
    handleDeleteTask,
    handleClickEnter,
    handleEditTaks,
    clearTasksCompleted,
    indexOfLastTask,
    filteredTasks,
    currentTasks,
  };
};

export default useTaskFunctions;
