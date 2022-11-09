import style from './Blog.module.scss';
import Container from './../../components/Container/Container';
import MainLayout from '~layouts/MainLayout';

const Blog = () => {
  return (
    <MainLayout>
      <Container>
        <h1>Blog</h1>
      </Container>
    </MainLayout>
  );
};

export default Blog;
