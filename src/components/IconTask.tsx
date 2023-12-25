import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";

interface IconTaskProps {
    id: number;
    title: string;
    isCompleted: boolean;
  }

const IconTask = ({tasks}: {tasks: IconTaskProps[]}) => {
    return (
        <div>
            {tasks.length === 0 && (
                <div>
                  <AssignmentLateIcon
                    sx={{ fontSize: 100 }}
                    className="text-[#E4E5F1]"
                  />
                  <p className="text-[#4e1eb4] text-xl font-medium mt-4">
                    Nenhuma tarefa criada <br />
                    Adicione tarefas para sua rotina!
                  </p>
                </div>
              )}
        </div>
    )
};

export default IconTask;
