import styles from './offers.module.scss';
import Banner from '../../assets/images/cart-3.png';
import Ten from '../../assets/images/10dol.png';
import Nine from '../../assets/images/9dol.png';
import Icon1 from '../../assets/images/cart-4.png';
import Icon2 from '../../assets/images/cart-5.png';
import Icon3 from '../../assets/images/cart-6.png';
import Icon4 from '../../assets/images/cart-7.png';
import Button from 'elements/button/Button';
import { ButtonTypes } from '../../types/Button';
const Offers = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.banner}>
        <img src={Banner} alt="banner" />
      </div>
      <div className={styles.offers}>
        <div className={styles.offers__title}>OFFERS</div>
        <div className={styles.offers__subtitle}>Our Offer Dishes</div>
        <div className={styles.offers__text}>
          Our chefs create melt-in-your-mouth dishes that'll satiate even the
          fussiest eaters now the dishes are in offers use it based on hunger.
        </div>
      </div>

      <div className={styles.offers__burgers}>
        <div className={styles.offers__burger}>
          <img src={Ten} alt="burger" />
        </div>
        <div className={styles.offers__burger}>
          <img src={Nine} alt="burger" />
        </div>
      </div>

      <div className={styles.offers}>
        <div className={styles.offers__title}>MENU</div>
        <div className={styles.offers__subtitle}>Popular Dishes</div>
        <div className={styles.offers__text}>
          There is a game between the waiters in restaurant to see who serves
          the food to each table fastest. That led to attempting the Guinness
          Record.
        </div>
      </div>

      <div className={styles.popular}>
        {/* Card 1 */}
        <div className={styles.popular__card}>
          <div className={styles.popular__icon}>
            <img src={Icon1} alt="icon1" />
          </div>

          <div className={styles.popular__namePosition}>
            <div className={styles.popular__title}>Chicken Manjoori</div>
            <div className={styles.popular__price}>$15</div>
          </div>

          <hr className={styles.popular__line} />

          <div className={styles.offers__text}>
            Dish relished by all age groups as a starter dish at parties.
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.popular__card}>
          <div className={styles.popular__icon}>
            <img src={Icon2} alt="icon2" />
          </div>

          <div className={styles.popular__namePosition}>
            <div className={styles.popular__title}>Hotdog</div>
            <div className={styles.popular__price}>$10</div>
          </div>

          <hr className={styles.popular__line} />

          <div className={styles.offers__text}>
            Grilled sausage served in the slit of a partially sliced bun.
          </div>
        </div>

        {/* Card 3 */}
        <div className={styles.popular__card}>
          <div className={styles.popular__icon}>
            <img src={Icon3} alt="icon3" />
          </div>

          <div className={styles.popular__namePosition}>
            <div className={styles.popular__title}>Fresh Salmon</div>
            <div className={styles.popular__price}>$5</div>
          </div>

          <hr className={styles.popular__line} />

          <div className={styles.offers__text}>
            Beat the health blues with our Super Immune Blue Juice Recipe.
          </div>
        </div>

        {/* Card 4 */}
        <div className={styles.popular__card}>
          <div className={styles.popular__icon}>
            <img src={Icon4} alt="icon4" />
          </div>

          <div className={styles.popular__namePosition}>
            <div className={styles.popular__title}>Veg Burger</div>
            <div className={styles.popular__price}>$10</div>
          </div>

          <hr className={styles.popular__line} />

          <div className={styles.offers__text}>
            Burgers may be made from ingredients like beans.
          </div>
        </div>
      </div>

      {/* Button */}
      <div className={styles.button}>
        <Button text="See all dishes" type={ButtonTypes.WHITE_GOLD} />
      </div>
    </section>
  );
};

export default Offers;
