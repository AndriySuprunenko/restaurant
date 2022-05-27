import styles from './navigation.module.scss';
import Link from '../../elements/link/Link';
import Instagram from '../../assets/images/instagram.png';
import Facebook from '../../assets/images/facebook.png';
import Twitter from '../../assets/images/twitter.png';
import Pinterest from '../../assets/images/pinterest.png';

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
