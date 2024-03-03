import Card from 'react-bootstrap/Card';
import Tags from './Tags';
import Boton from './Boton';



const MyCard = ({ imagen, nombre, descripcion, colorButton, textButton, colorSexo, sexo }) => {
  return (
    <>
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imagen} alt={nombre}/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Boton colorButton={colorButton} textButton={textButton} />
            </Card.Body>
            <Tags colorSexo={colorSexo} sexo={sexo} />
        </Card>
    </>

  );
};

export default MyCard;

