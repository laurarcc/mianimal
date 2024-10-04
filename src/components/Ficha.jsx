import {Avatar, Button, Stack, Typography, useTheme} from "@mui/material";
import Appgrid from "../Appgrid.jsx";
import {useState} from "react";

function Ficha({animal, atribute, imageUrl, imageSize, description}) {
    const [count, setCount] = useState(0)
    const theme = useTheme();

    function handleClick(){
        setCount(count+1)
    }

return (
    <>
        <div>
            <Stack direction={{xs: 'column', sm: 'row', med: 'column'}} spacing={3}
                   sx={{justifyContent: "center", alignItems: "center",}}>
                <center>
                    <Typography variant='h2'>Soy un {animal} y {atribute}</Typography>
                    <Typography>{description}</Typography>
                </center>
                <center>
                    <Avatar className='avatar'
                            src={imageUrl}
                            alt='imagen'
                            sx={{width:imageSize, height:imageSize}}>

                    </Avatar><br/>
                </center>
            </Stack>

            <Stack direction="row-reverse"
                   spacing={5}
                   sx={{
                       justifyContent: "space-evenly",
                       alignItems: "baseline",
                   }}>

                <br/>

            </Stack>
        </div>
    </>
)

}

export default Ficha
