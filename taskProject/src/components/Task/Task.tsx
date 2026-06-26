import { useEffect, useState } from "react";
import ListTask from "../ListTask/ListTask";
import Formular from "../Formular/Formular";
import Research from "../Research/Research";
import Nav from "../NavBar/NavBar";

interface Task {
  id: number;
  title: String;
  done: Boolean;
}

interface TaskSearched {
  id: number;
  title: String;
  done: Boolean;
}

export default function Task() {
  const [task, setTask] = useState<Task[]>([]);
  const [searchTask, setSearchTask] = useState<TaskSearched[]>([]);

  (useEffect(() => {
    fetch("http://localhost:8080/task/all")
      .then((response) => response.json())
      .then((result) => setTask(result))
      .catch((error) => console.log(error));
  }),
    [task]);

  const onDone = (id: number) => {
    fetch("http://localhost:8080/task/" + id, { method: "PATCH" })
      .then((response) => response.json())
      .then((data) =>
        setTask(task.map((task) => (task.id === id ? data : task))),
      ) // ce que tu vas afficher
      .catch((error) => console.log(error));
  };

  const onDelete = (id: number) => {
    fetch("http://localhost:8080/task/" + id, { method: "DELETE" })
      .then((response) => response.json())
      .then(() => setTask(task.filter((task) => task.id !== id))) // ce que tu veux afficher
      .catch((error) => console.log(error));
  };

  const onSubmit = (title: string, done: boolean) => {
    fetch("http://localhost:8080/task/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        done: done,
      }),
    })
      .then((response) => response.json())
      .then((data) => setTask([...task, data])) // ajouter au task le
      .catch((error) => console.log(error));
  };

  const onReasearch = (researchTask: string) => {
    fetch("http://localhost:8080/task/researchby/" + researchTask, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setSearchTask(data));
  };

  return (
    <>
      {/* <Nav /> */}
      <Research onReasearch={onReasearch} searchTask={searchTask} />
      <Formular submitFormular={onSubmit} />
      <ListTask listTask={task} onDone={onDone} onDelete={onDelete} />
    </>
  );
}
