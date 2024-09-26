import {Grid, Button} from "@mui/material";

const Appgrid = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={10} sm={6} md={4}>
                <Button variant='contained' fullWidth> 1 </Button>
            </Grid>
            <Grid item xs={10} sm={6} md={4}>
                <Button variant='contained' fullWidth> 2 </Button>
            </Grid>
            <Grid item xs={10} sm={6} md={4}>
                <Button variant='contained' fullWidth> 3 </Button>
            </Grid>
        </Grid>
    )
}

export default Appgrid