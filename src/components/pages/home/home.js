import AllPosts from "../../features/allPosts";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import { NavLink } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';

const Home = () =>{
    return(
        <Container>
            <Stack direction="horizontal" gap={3}>
                <div className='mb-4'><h1>All posts</h1></div>
                <div className="ms-auto"><Button variant="outline-info" as={NavLink} to="/post/add" >Add post</Button></div>
            </Stack>
            <AllPosts />
        </Container>
    );
}

export default Home