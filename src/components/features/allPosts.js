import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';

export const getAllPosts = ({ posts }) => posts;



function AllPosts() {
    
const posts = useSelector(getAllPosts)

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {posts.map(post => (
        <Col>
          <Card>
            <Card.Body>
              <Card.Title as="h3">{post.title}</Card.Title>
              <Card.Text as="p" className='my-0'><strong>Author: </strong>{post.author}</Card.Text>
              <Card.Text as="p" ><strong>Published: </strong>{post.publishedDate}</Card.Text>
              <Card.Text className='mb-4'>{post.shortDescription}</Card.Text>
              <Button variant="primary" as={NavLink} to={"/post/"+ post.id}>Read more</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default AllPosts;