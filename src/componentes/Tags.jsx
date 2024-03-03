import Badge from 'react-bootstrap/Badge';

const Tags = ({ colorSexo, sexo }) => {
  return (
    <Badge bg={colorSexo}>{sexo}</Badge>
  );
};

export default Tags;
