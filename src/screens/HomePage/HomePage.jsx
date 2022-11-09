import styles from './HomePage.module.scss';
import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import SlideShowHomePage from './SlideShowHomePage/SlideShowHomePage';
import HomeCards from './HomeCardsSection/HomeCards';
import HomeAbout from './HomeAboutUs/HomeAbout';

function HomePage() {
  return (
    <MainLayout>
      {/* slide show */}
      <SlideShowHomePage />
      {/* end Slide Show */}
      {/* Cards Secion 2 */}
      <HomeCards />
      {/* end Cards Secion 2 */}
      {/* Home About Us */}
      <HomeAbout />
      {/* end Home About Us */}
    </MainLayout>
  );
}

export default HomePage;
