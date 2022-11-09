import style from './AboutUs.module.scss';
import React from 'react';
import MainLayout from '~layouts/MainLayout';
import { useRouter } from 'next/router';

function AboutUs() {

  return (
    <MainLayout>
      <h1 className={style.about}>About Us</h1>;
    </MainLayout>
  );
}

export default AboutUs;
