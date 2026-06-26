import { useState } from "react";
import { TextField, Button } from "@mui/material";

interface TaskSearched {
    id : number;
    title : String;
    done: Boolean;
}

interface ResearchProps {
    onReasearch : (taskResearch : string) => void ; 
    searchTask : TaskSearched[];
}


export default function Research ( {onReasearch, searchTask} : ResearchProps) {

    const [taskReasearch, setTaskReasearch] = useState(""); 


    return (
        <>
            <h3>Recherche : </h3>
            <TextField id="standard-basic" label="Research task ..." variant="standard" onChange={(e) => setTaskReasearch(e.target.value)}/>
            <Button variant="contained" onClick={() => onReasearch(taskReasearch)}>Recherche</Button>
            {searchTask && 
              searchTask.map((task) => 
              (<div key={task.id}>{"task: "+task.title+" status: "+task.done+" id :"+task.id}  </div>)
            )   
            } 
        </>
    );
}