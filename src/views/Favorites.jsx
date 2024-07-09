
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import { useContext } from "react" // Agregamos el hoot de useContext
import { MyContext } from '../Context/MyContext'
import { CiHeart } from 'react-icons/ci'
import '../App.css';


const Favorites = () => {
  const { imagenes, megusta, nogusta} = useContext(MyContext); // 

  const filtrar = imagenes.filter((item) => item.LIKED === true); // creamos una funcion FILTER que modificara al darle click al corazon

  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <Container>
        {filtrar.map((item) => { // hacemos un recorrido del array
          const funcionEliminar = () => filtrar ? nogusta(item.id) : megusta(item.id)
          return (
            <Card key={item.id} style={{ width: "18rem"}}>
              <Card.Img
                style={{ height: "100%" }}
                variant="top"
                src={item.src.original}
              />
              <CiHeart className="SVG" onClick={ funcionEliminar } style={ filtrar ? { color: "white" } : { color: "black" }} />

            </Card>
          );
        })}
      </Container>
    </div>
  );
}

export default Favorites