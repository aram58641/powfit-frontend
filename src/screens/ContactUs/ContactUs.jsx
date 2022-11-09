import styles from './ContactUs.module.scss';
import React from 'react';
import MainLayout from '~layouts/MainLayout';

function ContactUs() {
  return <MainLayout>

<div className={styles['contact-us']}>Contact Us</div>;

  </MainLayout>
  
}

export default ContactUs;
