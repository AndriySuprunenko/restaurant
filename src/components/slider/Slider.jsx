import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './slider.module.scss';
import Client1 from '../../assets/images/client-1.png';
import Client2 from '../../assets/images/client-2.png';
import Client3 from '../../assets/images/client-3.png';
import Decor from '../../assets/images/decor-2.png';

import 'swiper/scss';
import 'swiper/scss/pagination';

const Slider = () => {
  return (
    <section className={styles.slider} id='sec-4'>
      <div className={styles.container}>
        <div className={styles.slider__block}>
          <div className={styles.slider__title}>TESTIMONIAL</div>
          <div className={styles.slider__subtitle}>Our Clients Say</div>
          <div className={styles.slider__text}>
            We love to hear from customers, so please leave a comment or say
            hello in an email.
          </div>
        </div>
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className={styles.swiper__cart}>
              <div className={styles.swiper__cart_header}>
                <div className={styles.swiper__avatar}>
                  <div className={styles.swiper__avatar_img}>
                    <img
                      className={styles.swiper__avatar_dec}
                      src={Decor}
                      alt="decor"
                    />
                    <img src={Client1} alt="client" />
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

          <SwiperSlide>
            <div className={styles.swiper__cart}>
              <div className={styles.swiper__cart_header}>
                <div className={styles.swiper__avatar}>
                  <div className={styles.swiper__avatar_img}>
                    <img
                      className={styles.swiper__avatar_dec}
                      src={Decor}
                      alt="decor"
                    />
                    <img src={Client2} alt="client" />
                  </div>
                </div>

                <div>
                  <div className={styles.swiper__name}>Jack Sparrow</div>
                  <div className={styles.swiper__city}>Salt Lake City</div>
                </div>
              </div>

              <hr className={styles.swiper__line} />
              <div className={styles.swiper__text}>
                I have visited this fantastic restaurant on several occasions,
                food is absolutely outstanding & attention to detail is in
                league of its own.
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.swiper__cart}>
              <div className={styles.swiper__cart_header}>
                <div className={styles.swiper__avatar}>
                  <div className={styles.swiper__avatar_img}>
                    <img
                      className={styles.swiper__avatar_dec}
                      src={Decor}
                      alt="decor"
                    />
                    <img src={Client3} alt="client" />
                  </div>
                </div>

                <div>
                  <div className={styles.swiper__name}>Martin</div>
                  <div className={styles.swiper__city}>San Diego</div>
                </div>
              </div>

              <hr className={styles.swiper__line} />
              <div className={styles.swiper__text}>
                Perfectly known for its fabulous taste and food. Anywhere your
                hunger is satisfied. They give best fried chicken and burgers
                those are yummy.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
