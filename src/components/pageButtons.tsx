import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import { PagesButtonsProps } from "./types";

const PagesButtons = ({
  tasks,
  tasksPerPage,
  currentPage,
  indexOfLastTask,
  setCurrentPage,
  filteredTasks
}: PagesButtonsProps) => {
  return (
    <div>
      {filteredTasks.length > tasksPerPage && (
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={
              filteredTasks.length > 4 && currentPage > 1 ? "text-[#1F1F1F] md:text-[#E4E5F1]" : "invisible"
            }
          >
            <NavigateBeforeIcon />
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastTask >= tasks.length}
            className={
              filteredTasks.length > 4 && indexOfLastTask < filteredTasks.length
                ? "text-[#1F1F1F] md:text-[#E4E5F1]"
                : "invisible"
            }
          >
            <NavigateNextIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default PagesButtons;
