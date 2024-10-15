import {CustomButton} from 'milibreria';
import {Avatar, Stack, Typography} from "@mui/material";

function Ficha({animal, atribute, imageUrl, imageSize, description}) {
return (
    <>
        <div>
            <Stack direction={{xs: 'column', sm: 'row', med: 'column'}} spacing={3}
                   sx={{justifyContent: "center", alignItems: "center",}}>
                <center>
                    <Typography variant='h2'>Soy un {animal} y {atribute}</Typography>
                    <Typography>{description}</Typography>
                    <CustomButton text={"hola"} txtcolor={"white"} bgcolor={"orange"}></CustomButton>
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
