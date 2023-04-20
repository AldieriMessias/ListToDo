import { TextField, Button, Paper } from "@mui/material";
import { useState } from "react";

export default function Form({toDoHandler}){
    const [text, setText] = useState(null); 
    const[id, setId] = useState(0);

    const toDoCreate = (text) => {
        const toDoObj = {text:text, id:id};
        setId(id + 1);
        toDoHandler(toDoObj);
        document.getElementById("outlined-basic").value=null
    };
    
    return(
        <Paper style={{padding:"1em"}}>
        <div style={{display:"flex", justifyContent:"center"}}>
        <TextField 
        id="outlined-basic" 
        label="Tarefa" 
        variant="outlined" 
        onChange={(e) => setText(e.target.value)} 
        fullWidth 
        />
        <Button variant="text" onClick={() => toDoCreate(text)}>
            Add
            </Button>
        </div>

        
        </Paper>
    )
}
