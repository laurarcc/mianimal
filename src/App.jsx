import { useState } from "react";
import './App.css'
import {Avatar, Button, Stack, Typography, useTheme } from "@mui/material";
import Appgrid from "./Appgrid.jsx";

function App() {
    const [count, setCount] = useState(0)
    const theme = useTheme();

    function handleClick(){
        setCount(count+1)
    }

    const datos = {
        animal: 'tiburón',
        imageUrl: 'src/assets/07cecf8afecab9f698677e6670bdb65f.jpg',
        imageSizes: 300,
    }

    const styles = {
        avatar: {
            width: datos.imageSizes,
            height: datos.imageSizes,
            backgroundColor: 'blue',
            [theme.breakpoints.up('md')]: {
                backgroundColor: 'red',  // Cambia el color a rojo en pantallas medianas o más grandes
            },
        },
    };


    return (
        <>
            <div>
                <Stack direction={{xs:'column', sm:'row', med:'column'}} spacing={3} sx={{justifyContent: "center", alignItems: "center",}}>
                    <center>
                        <Appgrid><Typography variant='h1'>Botones</Typography></Appgrid>
                        <Typography variant='h2'>Soy un {datos.animal} y vivo feliz</Typography>
                    </center>
                    <center>
                        <Avatar className='avatar'
                                src={datos.imageUrl}
                                alt='imagen'
                                sx={styles.avatar}>

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
                    <center><Button variant="contained" size='large'
                                    sx={{color: 'white', backgroundColor: '#527e93'}}>Contained</Button></center>

                    <center><Button variant="text" onClick={handleClick}>Intentaste acariciar al
                        tiburón {count} veces</Button>
                    </center>

                    <center><Button variant="outlined" size='small'
                                    sx={{color: 'white', backgroundColor: '#527e93'}}>Outlined</Button></center>

                    <center><Button variant="contained" disabled>No sirve para nada</Button></center>
                </Stack>
            </div>
        </>
    )
}

export default App
