import style from './HomeCards.module.scss';
import Cards from './cards/Cards';
import Container from '~components/Container';
import imageCards1 from '../../../assets/images/homeCardSection/imageCard1.jpg';
import imageCards2 from '../../../assets/images/homeCardSection/imageCard2.jpg';
import imageCards3 from '../../../assets/images/homeCardSection/imageCard3.jpg';

function HomeCards() {
  return (
    <>
      <div className={style.MainCardsSection}>
        <Container>
          <div className={`${style.cardsPos} `}>
            <Cards image = {imageCards1.src} texts = {"TIMETABLE"}/>
            <Cards image = {imageCards2.src} texts = {"CLASSES"}/>
            <Cards image = {imageCards3.src} texts = {"JOIN US"}/>
          </div>
        </Container>
      </div>
    </>
  );
}

export default HomeCards;
