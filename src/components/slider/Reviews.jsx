import styles from './reviews.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import React from 'react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import Decor from '../../assets/images/decor-2.png';

SwiperCore.use([Pagination]);

const Reviews = () => {
  const slides = [];

  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <div className={styles.swiper__cart}>
          <div className={styles.swiper__cart_header}>
            <div className={styles.swiper__avatar}>
              <div>
                <img
                  className={styles.swiper__avatar_dec}
                  src={Decor}
                  alt="decor"
                />
                <img
                  className={styles.swiper__avatar_img}
                  src={`https://picsum.photos/id/${i + 1}/115/115`}
                  alt={`Client ${i}`}
                />
              </div>
            </div>

            <div>
              <div className={styles.swiper__name}>Natasha D</div>
              <div className={styles.swiper__city}>Newyork</div>
            </div>
          </div>

          <hr className={styles.swiper__line} />
          <div className={styles.swiper__text}>
            They known for its fabulous taste and food. Anywhere you go your
            hunger is satisfied. The best chicken & burgers those are yummy.
          </div>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <section className={styles.slider}>
      <div className={styles.container}>
        <div className={styles.slider__block}>
          <div className={styles.slider__title}>TESTIMONIAL</div>
          <div className={styles.slider__subtitle}>Our Clients Say</div>
          <div className={styles.slider__text}>
            We love to hear from customers, so please leave a comment or say
            hello in an email.
          </div>
        </div>

        <React.Fragment>
          <Swiper
            id="main"
            wrapperTag="ul"
            pagination={{ clickable: true }}
            spaceBetween={0}
            breakpoints={{
              // when window width is >= 640px
              350: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 2,
              },
            }}
          >
            {slides}
          </Swiper>
        </React.Fragment>
      </div>
    </section>
  );
};

export default Reviews;
