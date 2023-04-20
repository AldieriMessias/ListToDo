import React, { useState } from "react";
import ToDoItem from '../components/ToDoItem';
import { Container, List } from '@mui/material';
import Form from "../components/Form.js";


export default function Home(){
    const [toDos, setToDos] = useState([])
    

    const toDoHandler = (toDo) =>{
        
        setToDos([...toDos , toDo]);
    };

    const deleteToDo = (id) => {
        let filtered = toDos.filter((toDo) => toDo.id !== id);
        setToDos(filtered)
       
    };

    const editToDo = (id, editText) =>{
       let toDosArr=[...toDos];
        
       for(let i in toDosArr){
        if( toDosArr[i].id == id){
            toDosArr[i].text = editText
        }
       }
    
       //    toDosArr.splice(id,1, {text:editText, id:id})
    
       setToDos(toDosArr)
    }

    return(
        <Container maxWidth="xs" style={{marginTop:"1em"}}>
      <Form toDoHandler={toDoHandler} />
      <List sx={{marginTop:"1em" }}>
         {toDos.map((toDo)=>( 
            <div key={toDo.id} style={{marginTop:"'1em"}}> 
                <ToDoItem editToDo={editToDo} toDo={toDo} deleteToDo={deleteToDo} />
         </div>
         ))}
        </List>
   </Container>
    )
}