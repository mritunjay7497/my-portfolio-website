import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function CategoryPill({ categories }) {
  return (
    <Stack direction="horizontal" gap={2} className='flex-wrap'>
      {categories.map((category, index) => (
        <Badge pill bg="success" key={index}>
          {category}
        </Badge>
      ))}
    </Stack>
  );
}

export default CategoryPill;