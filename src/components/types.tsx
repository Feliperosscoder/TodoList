export interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface TaskContainerProps {
  tasks: Task[];
  filterActive: string;
  filteredTasks: Task[];
  currentTasks: Task[];
  tasksPerPage: number;
  currentPage: number;
  indexOfLastTask: number;
  handleTaskIsComplete: (taskId: number) => void;
  handleDeleteTask: (taskId: number) => void;
  setFilterActive: (filter: string) => void;
  clearTasksCompleted: () => void;
  setCurrentPage: (page: number) => void;
}

export interface PagesButtonsProps {
  tasks: Task[]
  filteredTasks: Task[]
  tasksPerPage: number;
  currentPage: number;
  indexOfLastTask: number;
  setCurrentPage: (page: number) => void;
}

export interface TaskComponentProps {
  task: Task;
  index: number;
  handleTaskIsComplete: (taskId: number) => void;
  handleDeleteTask: (taskId: number) => void;
}
