import styles from './blog.module.scss';
import Cart1 from '../../assets/images/cart-8.png';
import Cart2 from '../../assets/images/cart-9.png';
import Button from 'elements/button/Button';
import { ButtonTypes } from 'types/Button';

const Blog = () => {
  return (
    <section className={styles.blog} id='sec-5'>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header__title}>BLOG</div>
          <div className={styles.header__subtitle}>Be First Who Read News</div>
          <div className={styles.header__text}>
            Explore the latest stories about our dishes, offers, events and
            future plans here.
          </div>
        </div>

        <div className={styles.news}>
          {/* Cart1 */}
          <div className={styles.news__block}>
            <div className={styles.block}>
              <div className={styles.news__images}>
                <img src={Cart1} alt="img" />
              </div>
              <div className={styles.news__button}>
                <Button text="View More" type={ButtonTypes.GOLD} />
              </div>
            </div>

            <div className={styles.news__text}>
              <div className={styles.news__title}>
                <div className={styles.header__title}>DELICIOUS</div>
                <div className={styles.header__title}>MARCH 19, 2022</div>
              </div>
              <div className={styles.header__subtitle}>
                The Legend of US Cuisine: The Story of Hungry People
              </div>
              <div className={styles.header__text}>
                Capitalize on low-hanging fruit to identify a ballpark value
                added matrix economically and the creative activity to beta test
                override the food quality.
              </div>
            </div>
          </div>

          {/* Cart2 */}
          <div className={styles.news__block}>
          <div className={styles.block}>
              <div className={styles.news__images}>
                <img src={Cart2} alt="img" />
              </div>
              <div className={styles.news__button}>
                <Button text="View More" type={ButtonTypes.GOLD} />
              </div>
            </div>

            <div className={styles.news__text}>
              <div className={styles.news__title}>
                <div className={styles.header__title}>COOKING</div>
                <div className={styles.header__title}>MARCH 19, 2022</div>
              </div>
              <div className={styles.header__subtitle}>
                The Most Popular Delicious Food of Mediterranean Cuisine
              </div>
              <div className={styles.header__text}>
                Strategies on low-hanging fruit to identify a ballpark value
                added matrix economically and the creative activity to beta test
                override the food quality.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
