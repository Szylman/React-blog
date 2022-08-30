import { useState } from "react";
import PropTypes from 'prop-types';
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../redux/categoriesRedux";


const PostForm = ({action, actionText, ...props}) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date() ||'');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [categoryError, setCategoryError] = useState(false);
    const [category, setCategory] = useState(props.category || '');
    const categories = useSelector(getAllCategories);

    const { register, handleSubmit: validate, formState: { errors } } = useForm();


    const handleSubmit = () => {
      setContentError(!content)
      setDateError(!publishedDate)
      setCategoryError(!category);
      if(content && publishedDate) {
        action({ title, author, publishedDate, shortDescription, content });
      }
    };

    return (
        <Row>
        <Col md={{span: 6, offset: 3}}>
          <h1>{actionText}</h1>
          <Form onSubmit={validate(handleSubmit)}>
            <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                {...register("title", { required: true, minLength: 3 })}
                value={title}
                onChange={e => setTitle(e.target.value)}
                type="text" placeholder="Enter title"
              />
              {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
            </Form.Group>
            <Form.Group className="mb-3 w-50">
              <Form.Label >Author</Form.Label>
              <Form.Control 
                {...register("author", { required: true, minLength: 3 })} 
                type="text" placeholder="Enter author" 
                value={author} 
                onChange={e => setAuthor(e.target.value)}
              />
            {errors.author && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
            </Form.Group>
            <Form.Group className="mb-3 w-50">
              <Form.Label value={publishedDate}>Published</Form.Label>
              <DatePicker 
              selected={publishedDate}
              onChange={(publishedDate)=> setPublishedDate(publishedDate)}
              />
              {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>   
              <Form.Control {...register("category", { required: true})}
                as="select"
                placeholder="Please select category"
                value={category ? category : "1"}
                onChange={e => setCategory(e.target.value)}>
                  <option disabled value="1">Select category...</option>
                  {categories.map((category, index) => <option key={index} value={category}>{category}</option> )}   
              </Form.Control>            
              {categoryError && <small className="d-block form-text text-danger mt-2">Please choose category</small>}      
            </Form.Group>
            <Form.Group >
              <Form.Label value={shortDescription}>Short description</Form.Label>              
              <FloatingLabel controlId="floatingTextarea" className="mb-3">
                  <Form.Control
                  {...register("shortDescription", { required: true, minLength: 20 })}
                  as="textarea" placeholder="Leave a comment here" 
                  style={{ height: '100px' }} 
                  value={shortDescription} 
                  onChange={e => setShortDescription(e.target.value)} />
              </FloatingLabel>
              {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Title is too short (min is 20)</small>}
            </Form.Group> 
            <Form.Group >
              <Form.Label value={content}>Main content</Form.Label>              
              <FloatingLabel controlId="floatingTextarea" className="mb-3">
                  <ReactQuill as="textarea" placeholder="Leave a comment here"  
                  value={content} 
                  onChange={value => setContent(value)} 
                  />
                  {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
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