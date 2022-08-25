import { useState } from "react";
import PropTypes from 'prop-types';
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";


const PostForm = ({action, actionText, ...props}) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
      };

    return (
        <Row>
        <Col md={{span: 6, offset: 3}}>
          <h1>{actionText}</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 w-50">
              <Form.Label >Title</Form.Label>
              <Form.Control value={title} type="text" placeholder="Enter title" onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3 w-50">
              <Form.Label >Author</Form.Label>
              <Form.Control type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3 w-50">
              <Form.Label value={publishedDate}>Published</Form.Label>
              <Form.Control type="text" placeholder="dd-mm-yyyy" value={publishedDate} onChange={e => setPublishedDate(e.target.value)}/>
            </Form.Group>
            <Form.Group >
              <Form.Label value={shortDescription}>Short description</Form.Label>              
              <FloatingLabel controlId="floatingTextarea" className="mb-3">
                  <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
              </FloatingLabel>
            </Form.Group> 
            <Form.Group >
              <Form.Label value={content}>Main content</Form.Label>              
              <FloatingLabel controlId="floatingTextarea" className="mb-3">
                  <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} value={content} onChange={e => setContent(e.target.value)} />
              </FloatingLabel>
            </Form.Group>
            <Button as="input" type="submit" value={actionText} />{' '}        
          </Form>
        </Col>
      </Row>

    ); 
};
PostForm.propTypes = {
    action: PropTypes.func.isRequired,
    actionText: PropTypes.string.isRequired,
    author: PropTypes.string,
    title: PropTypes.string,
    shortDescription: PropTypes.string,
    publishedDate: PropTypes.string,
    content: PropTypes.string,
}
export default PostForm