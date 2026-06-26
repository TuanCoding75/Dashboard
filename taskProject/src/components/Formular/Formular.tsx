import { TextField, Button, Checkbox } from "@mui/material";
import { useState } from "react";

interface TaskFormular {
  title: String;
  done: Boolean;
}

interface formularProps {
  submitFormular: (title: string, done: boolean) => void;
}

export default function Formular({ submitFormular }: formularProps) {
  const [title, setTitle] = useState("");
  const [done, setDone] = useState(false);

  return (
    <>
      <h2>Create Task :</h2>
      <TextField
        id="standard-basic"
        label="Title"
        variant="standard"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>State Task</label>
      <Checkbox
        id="standard-basic"
        onChange={(e) => setDone(e.target.checked)}
      />
      <Button variant="contained" onClick={() => submitFormular(title, done)}>
        Envoyer
      </Button>
    </>
  );
}
