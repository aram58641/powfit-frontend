import styles from './HomePage.module.scss';
import React from 'react';
import Button from '~components/Button';
import Container from '~components/Container';

function HomePage() {
  return <div className={styles['home-page']}>Home Page
  <Container>
  <Button>D</Button>


  </Container>
    </div>;
}

export default HomePage;
