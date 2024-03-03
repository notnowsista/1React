import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const Tags = ({ colorSexo, sexo, colorCastrado, castrado }) => {
  return (
    <Stack direction="horizontal" gap={5}>
        <Badge pill bg={colorSexo}>{sexo}</Badge>
        <Badge pill bg={colorCastrado}>{castrado}</Badge>
    </Stack>
  );
};

export default Tags;
