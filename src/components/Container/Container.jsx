import styles from './Container.module.scss';
import React from 'react';

function Container({ children }) {
  return <div className={styles['app-container']}>{children}</div>;
}

export default Container;
