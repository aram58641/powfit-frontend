import Container from '~components/Container';
import style from './HomeAbout.module.scss';

const HomeAbout = () => {
  return (
    <div className={style.AboutHomeMain}>
      <Container>
        <div className={style.dfLRBlock}>
          <div className={style.leftBox}>
            <div className={style.imageBox}></div>
          </div>
          <div className={style.rightBox}>
            <div>
              <p className={style.textRightBar}>
                INTRODUCING <span>POWFIT</span> , A FITNESS CENTER
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeAbout;
