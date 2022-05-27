import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './slider.module.scss';
import Cart from '../../assets/images/cart-1.png';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Slider = ({ slides }) => {
  return (
    <section className={styles.slider}>
      <div className={styles.container}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide>
          <div className={styles.slider_img}>
            <img src={Cart} alt="cart" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slider_img}>
            <img src={Cart} alt="cart" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slider_img}>
            <img src={Cart} alt="cart" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slider_img}>
            <img src={Cart} alt="cart" />
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
