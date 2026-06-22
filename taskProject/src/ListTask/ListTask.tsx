import { Button } from "@mui/material";

interface Task {
  id: number;
  title: String;
  done: Boolean;
}

interface ListTask {
  listTask: Task[];
  onDone: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function ListTask({ listTask, onDone, onDelete }: ListTask) {
  return (
    <>
      <h2>Mes tâches : </h2>
      {listTask.map((task) => (
        <div key={task.id}>
          {task.title}
          <Button variant="contained" onClick={() => onDone(task.id)}>
            {" "}
            {task.done ? "Undone" : "Done"}{" "}
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => onDelete(task.id)}
          >
            DELETE
          </Button>
        </div>
      ))}
    </>
  );
}
