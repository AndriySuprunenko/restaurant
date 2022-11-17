// Import
import Baner from '../../assets/images/banner.png';
import Button from '../../elements/button/Button';
import Decor from '../../assets/images/decor.png';
import { ButtonTypes } from '../../types/Button';
import styles from './banner.module.scss';
// Scss
import '../header/nav.css';

// Banner
const Banner = () => {
  return (
    <section className={styles.banner} id="sec-1">
      <div className="container">
        <div className={styles.banner__block}>
          <h1 className={styles.banner__title}>Welcome to Restaurant</h1>
          <p className={styles.banner__text}>
            The people, food and the prime locations make the perfect place good
            friends & family to come together and have great time.
          </p>
          <div className={styles.banner__button}>
            <Button text="View Menu" type={ButtonTypes.BLACK_GOLD} />
          </div>
        </div>
        <div className={styles.banner__block}>
          <hr className={styles.banner__frame_line} />
          <div className={styles.banner__frame}>
            <div className={styles.banner__frame_decor}>
              <img src={Decor} alt="decor" />
            </div>
            <div className={styles.banner__img}>
              <img src={Baner} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
