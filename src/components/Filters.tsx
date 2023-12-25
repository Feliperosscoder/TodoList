import { Task } from "./types";

interface FiltersProps {
  tasks: Task[];
  filterActive: string;
  setFilterActive: (filter: string) => void;
  clearTasksCompleted: () => void;
}

const Filters = ({
  tasks,
  filterActive,
  setFilterActive,
  clearTasksCompleted,
}: FiltersProps) => {
  return (
    <div>
      {tasks.length > 0 && (
        <div className="bg-[#25273C] text-[#515267] border-t-[1px] border-[#585870] rounded-b-lg grid grid-cols-3 py-[1.9rem] px-[2rem]">
          <p className="">
            <span>{tasks.length}</span> tasks
          </p>
          <div className="flex justify-between font-bold">
            <button
              className={`${
                filterActive !== "all"
                  ? "hover:text-[#fafafa] transition-all duration-150"
                  : "text-[#5855ff] scale-110"
              }`}
              onClick={() => setFilterActive("all")}
            >
              Todas
            </button>
            <button
              className={`${
                filterActive !== "active"
                  ? "hover:text-[#fafafa] transition-all duration-150"
                  : "text-[#5855ff] scale-110"
              }`}
              onClick={() => setFilterActive("active")}
            >
              Ativas
            </button>
            <button
              className={`${
                filterActive !== "completed"
                  ? "hover:text-[#fafafa] transition-all duration-150"
                  : "text-[#5855ff] scale-110"
              }`}
              onClick={() => setFilterActive("completed")}
            >
              Completas
            </button>
          </div>
          <div className="flex justify-end">
            <button
              onClick={clearTasksCompleted}
              className="hover:text-[#8d8fb3] hover:font-medium"
            >
              Limpar Completas
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
