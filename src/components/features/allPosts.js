import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import { dateToStr } from '../utils/dateToStr';


function AllPosts() {
    
const posts = useSelector(getAllPosts)

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {posts.map(post => (
        <Col key={post.id}>
          <Card>
            <Card.Body>
              <Card.Title as="h3">{post.title}</Card.Title>
              <Card.Text as="p" className='my-0'><strong>Author: </strong>{post.author}</Card.Text>
              <Card.Text as="p" ><strong>Published: </strong>{dateToStr (post.publishedDate)}</Card.Text>
              <Card.Text className='mb-4'>{post.shortDescription}</Card.Text>
              <Button variant="primary" key={post.id} as={NavLink} to={"/post/"+ post.id}>Read more</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default AllPosts;