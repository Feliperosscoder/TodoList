import AddIcon from "@mui/icons-material/Add";

interface handleAddTaskProps {
  handleAddTask: () => void
}

const AddIconTask = ({handleAddTask}: handleAddTaskProps) => {
  return (
    <div
      className="p-[.3rem] border-[0.2rem] border-[#421D8F] rounded-full flex justify-center items-center cursor-pointer"
      onClick={handleAddTask}
    >
      <span className="text-2xl font-normal text-[#E4E5F1] flex items-center justify-center">
        <AddIcon />
      </span>
    </div>
  );
};

export default AddIconTask;
