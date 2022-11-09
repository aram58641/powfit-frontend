import React from 'react';
import Container from '~components/Container';
import style from './TopBar.module.scss';
function TopBar() {
  return (
    <div className={style.mainTopBar}>
      <Container>
        <div className={`d-flex justify-content-between ${style.mainLTbars}`}>
          <div className={style.sizeLeftTopBar}>
            <div className="col">
              <a
                title="Facebook"
                href="https://www.facebook.com/templaza"
                target="_blank"
                rel="noopener"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="col">
              <a
                title="Twitter"
                href="https://twitter.com/templazavn"
                target="_blank"
                rel="noopener"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="col">
              <a
                title="Github"
                href="https://github.com/templaza"
                target="_blank"
                rel="noopener"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="col">
              <a
                title="Dribbble"
                href="https://dribbble.com/templaza"
                target="_blank"
                rel="noopener"
              >
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
            <div className="col">
              <a
                title="YouTube"
                href="https://www.youtube.com/channel/UCykS6SX6L2GOI-n3IOPfTVQ/videos"
                target="_blank"
                rel="noopener"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>{' '}
          <div className={style.rightTopBar}>
              <span className="astroid-contact-address me-4">
                <i className="fas fa-map-marker-alt me-2"></i>
                1826 Locust Street, Bainbridge{' '}
              </span>

              <span className="astroid-contact-openhours ">
                <i className="far fa-clock me-2"></i>
                Mon-Fri: 9:00am - 10:00pm{' '}
              </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopBar;
