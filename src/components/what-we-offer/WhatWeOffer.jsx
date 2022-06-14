import styles from './whatweoffer.module.scss';
import Calendar from '../../assets/images/calendar.png';
import Delivery from '../../assets/images/delivery.png';
import Menu from '../../assets/images/menu.png';

const WhatWeOffer = () => {
  return (
    <section className={styles.what_we_offer}>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.text__title}>WHAT WE OFFER</div>
          <div className={styles.text__subtitle}>Our Great Services</div>
          <div className={styles.text__text}>
            The atmosphere set the stage. It’s about more than just a dining
            room away from your home. food takes the spotlight as guests.
          </div>
        </div>
        <div className={styles.images}>
          <div className={styles.images__block}>
            <div className={styles.images__block2}>
              <div className={styles.images__img}>
                <img src={Calendar} alt="icon" />
              </div>
              <div className={styles.images__text}>Opened 24/7</div>
            </div>
          </div>

          <div className={styles.images__block}>
            <div className={styles.images__block2}>
              <div className={styles.images__img}>
                <img src={Menu} alt="icon" />
              </div>
              <div className={styles.images__text}>Special Menus</div>
            </div>
          </div>

          <div className={styles.images__block}>
            <div className={styles.images__block2}>
              <div className={styles.images__img}>
                <img src={Delivery} alt="icon" />
              </div>
              <div className={styles.images__text}>Home Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
