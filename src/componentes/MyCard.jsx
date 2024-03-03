import Card from 'react-bootstrap/Card';
import Tags from './Tags';



const MyCard = ({ imagen, nombre, descripcion, colorSexo, sexo, colorCastrado, castrado }) => {
  return (
    <>
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imagen} alt={nombre}/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
            </Card.Body>
            <Tags colorSexo={colorSexo} sexo={sexo} colorCastrado={colorCastrado} castrado={castrado} />
        </Card>
    </>

  );
};

export default MyCard;

