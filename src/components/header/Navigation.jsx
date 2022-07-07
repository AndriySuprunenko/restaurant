import styles from './navigation.module.scss';
import Link from '../../elements/link/Link';
import Instagram from '../../assets/images/instagram.png';
import Facebook from '../../assets/images/facebook.png';
import Twitter from '../../assets/images/twitter.png';
import Pinterest from '../../assets/images/pinterest.png';
import { useEffect } from 'react';
import './nav.css';
import Burger from './Burger';
// import { slide as Menu } from 'react-burger-menu';

const Navigation = () => {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };

  return (
    <section className='header-section'>
      <div className={styles.container}>
        <div className={styles.nav_block}>
          {/* Nav */}
          <div className={styles.navigation}>
            <Link text="Home" href="#sec-1" />
            <Link text="Aboute Us" href="#sec-2" />
            <Link text="Our Menu" href="#sec-3" />
            <Link text="Pages" href="#sec-4" />
            <Link text="Blog" href="#sec-5" />
            <Link text="Contact Us" href="#sec-6" />
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
          {/* Burger */}
          <div className={styles.burger}>
            <Burger></Burger>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
