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
        <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-10 bg-[#25273C] text-[#515267] border-t border-[#585870] rounded-b-lg  py-[1.9rem] px-[2rem]">
          <p className="hidden md:block">
            <span>{tasks.length}</span> tasks
          </p>
          <div className="flex flex-col items-center md:flex-row 2xl:flex-row justify-between gap-10 font-bold">
            <button
              className={`${
                filterActive !== "all"
                  ? "hover:text-[#fafafa] transition-all duration-150 "
                  : "text-[#5855ff] scale-110 border-y border-[#585870] py-2 px-2 md:border-none"
              }`}
              onClick={() => setFilterActive("all")}
            >
              Todas
            </button>
            <button
              className={`${
                filterActive !== "active"
                  ? "hover:text-[#fafafa] transition-all duration-150 "
                  : "text-[#5855ff] scale-110 border-y border-[#585870] py-2 px-2 md:border-none"
              }`}
              onClick={() => setFilterActive("active")}
            >
              Ativas
            </button>
            <button
              className={`${
                filterActive !== "completed"
                  ? "hover:text-[#fafafa] transition-all duration-150 "
                  : "text-[#5855ff] scale-110 border-y border-[#585870] py-2 px-2 md:border-none"
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
