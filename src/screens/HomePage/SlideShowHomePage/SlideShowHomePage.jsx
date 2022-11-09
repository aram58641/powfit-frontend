import Button from '~components/Button';
import style from './SlideShowHomePage.module.scss';

const SlideShowHomePage = () => {
  return (
    <>
      <div className="">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner out">
            <div className="carousel-item active">
              <div
                className={`d-block w-100 ${style.slideShowImage}`}
                data-bs-interval="10000"
              >
                <div>
                  <div className={style.textSlideShow}>
                    <div className={style.slideText}>
                      <h1>
                        START{' '}
                        <span className={style.textColorsSlide}>
                          YOUR FITNESS JOURNEY
                        </span>{' '}
                        TODAY
                      </h1>
                      <p>
                        Gym fitness dedicated, for a training center or personal
                        trainer, suitable to work with sport related websites
                        such as crossfit, bodybuilding or yoga
                      </p>

                      <Button color="transparent" rounded = {false}>
                        LEARN MORE
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className={`d-block w-100 ${style.slideShowImage2}`}
                data-bs-interval="1000"
              >
                <div>
                  <div className={style.textSlideShow}>
                    <div className={style.slideText}>
                      <h1>
                        THE HIIT{' '}
                        <span className={style.textColorsSlide}>
                          WORKOUT FOR EPIC
                        </span>{' '}
                        STRENGTH
                      </h1>
                      <p>
                        Swearing an oath and signing in blood to cut all sugar,
                        train six days per week, and get eight hours of sleep
                        per night starting in January is a pretty noble move.
                      </p>
                      <Button color="transparent" rounded = {false}>
                        LEARN MORE
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SlideShowHomePage;
