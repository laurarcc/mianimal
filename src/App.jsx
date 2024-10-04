import './App.css'
import Ficha from "./components/Ficha.jsx";
import {List, ListItem} from "@mui/material";

{/* /está en la carpeta public*/
}

function App() {

    const animals = [{
        id: 0,
        animal: 'gato',
        atribute: 'feliz',
        imageUrl: '/cat-4189697_640.jpg',
        imageSize: 150,
        description: 'Gato común',
    },
        {
            id: 1,
            animal: 'perro',
            atribute: 'bello',
            imageUrl: '/dog.jpg',
            imageSize: 150,
            description: 'Perro callejero',
        },
        {
            id: 2,
            animal: 'loro',
            atribute: 'hablador',
            imageUrl: '/bird.jpg',
            imageSize: 150,
            description: 'Loro de la jungla',
        },
        {
            id: 3,
            animal: 'tortuga',
            atribute: 'perezosa',
            imageUrl: '/turtle.jpg',
            imageSize: 150,
            description: 'Tortuga',
        }]


    return (
        <>
            {animals.map((animalItem) =>
            <Ficha key={animalItem.id}
            animal={animalItem.animal}
            atribute={animalItem.atribute}
            imageUrl={animalItem.imageUrl}
            imageSize={animalItem.imageSize}
            description={animalItem.description}/>)
            }
        </>
    )
}

    export default App