import Image from 'next/image';
import Link from 'next/link';
import style from './Cards.module.scss';

const Cards = ({ image,texts }) => {
  return (
    <div className={`col d-flex justify-content-center m-1}`}>
      <div
        className={`${style.cardLayer} `}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className={style.cardOpacity}>
        <Link href='#' className={`${style.textCard}`}>
           {texts}
        </Link>
        </div>
      
      </div>
    </div>
  );
};

export default Cards;
