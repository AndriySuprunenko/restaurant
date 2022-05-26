import styles from './navigation.module.scss';
import Link from '../../elements/link/Link';
import Instagram from '../../img/instagram.png';
import Facebook from '../../img/facebook.png';
import Twitter from '../../img/twitter.png';
import Pinterest from '../../img/pinterest.png';

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav_block}>
        {/* Nav */}
        <div className={styles.navigation}>
          <Link text="Home" />
          <Link text="Aboute Us" />
          <Link text="Our Menu" />
          <Link text="Pages" />
          <Link text="Blog" />
          <Link text="Contact Us" />
        </div>
        {/* Icons */}
        <div className={styles.icons}>
          <div className={styles.icon}>
            <img src={Instagram} alt="intagramm" />
          </div>
          <div className={styles.icon}>
            <img src={Facebook} alt="facebook" />
          </div>
          <div className={styles.icon}>
            <img src={Twitter} alt="twitter" />
          </div>
          <div className={styles.icon}>
            <img src={Pinterest} alt="pinterest" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
