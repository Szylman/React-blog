import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/about/about';
import Home from './components/pages/home/home';
import NotFound from './components/pages/notFound/notFound';
import SinglePost from './components/pages/post/singlePost';
import Footer from './components/views/footer/footer';
import Header from './components/views/header/header';
import PostAdd from './components/pages/post/add';
import PostEdit from './components/pages/post/edit';

function App() {
  return (
  <Container>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<SinglePost />} />
      <Route path="/post/add" element={<PostAdd />} />
      <Route path="/post/edit/:id" element={<PostEdit />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Container>
  );
}

export default App;
