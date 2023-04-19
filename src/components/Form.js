import { TextField, Button } from "@mui/material";

export default function Form(){
    return(
        <div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">Contained</Button>
        </div>
    )
}