import { Link, Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPostById, removePost } from "../../../redux/postsRedux";


const SinglePost = () =>{
    const dispatch = useDispatch();
    const { postId } = useParams();
    const postData = useSelector(state => getPostById(state, postId));

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleRemove = e => {
        e.preventDefault();
        dispatch(removePost(postData.id));
        handleClose();
    };
    
    if(!postData) return <Navigate to="/" />
    else
    return(
        <div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>        
                    This operation will completely remove post from the app. <br></br>
                    Are you sure you want to do that?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleRemove}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            
            <Row className="justify-content-center">
                <Col xs="6" lg="6">
                    <Card className="border-0">
                        <Card.Body>
                            <Card.Title as="h2">{postData.title}</Card.Title>
                            <Card.Text as="p" className='my-0'><strong>Author: </strong>{postData.author}</Card.Text>
                            <Card.Text as="p" ><strong>Published: </strong>{postData.publishedDate}</Card.Text>
                            <Card.Text className='mb-4' dangerouslySetInnerHTML={{ __html: postData.content }}></Card.Text>    
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs="6" lg="3" className="d-flex justify-content-end align-items-start">
                    <Button variant="outline-info" className="mx-2" as={Link} to={"/post/edit/" + postData.id}>Edit</Button>
                    <Button onClick={handleShow} variant="outline-danger">Delete</Button>
                </Col>
            </Row>
        </div>
    );
}

export default SinglePost