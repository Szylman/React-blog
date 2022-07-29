import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { useState } from "react";

export const getPostById = ({ posts }, postId) => posts.find(list => posts.id === postId);

const SinglePost = () =>{

    const [showModal, setShowModal] = useState(false);

    const { postId } = useParams();
    const postData = useSelector(state => getPostById(state, postId));

    return(
        <div>
            <Modal></Modal>
            <Row className="justify-content-center">
                <Col xs="6" lg="6">
                    <Card className="border-0">
                        <Card.Body>
                            <Card.Title as="h2">{postData.title}</Card.Title>
                            <Card.Text as="p" className='my-0'><strong>Author: </strong>{postData.author}</Card.Text>
                            <Card.Text as="p" ><strong>Published: </strong>{postData.publishedDate}</Card.Text>
                            <Card.Text className='mb-4'>{postData.shortDescription}</Card.Text>        
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs="6" lg="3" className="d-flex justify-content-end align-items-start">
                    <Button variant="outline-info" className="mx-2" as={Link} to={"/post/edit/" + postData.id}>Edit</Button>
                    <Link to="/">
                        <Button variant="outline-danger">Delete</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}

export default SinglePost