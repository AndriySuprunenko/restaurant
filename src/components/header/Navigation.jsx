import styles from './navigation.module.scss';
import Link from '../../elements/link/Link';
import Instagram from '../../assets/images/instagram.png';
import { useEffect } from 'react';
import './nav.css';
import Burger from './Burger';
import { LinkTypes } from 'types/Link';
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
    const banner = document.querySelector('#sec-1');
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
    scrollTop >= 250
      ? banner.classList.add('vidstup')
      : banner.classList.remove('vidstup');
  };

  return (
    <section className="header-section">
      <div className={styles.container}>
        <div className={styles.nav_block}>
          {/* Nav */}
          <div className={styles.navigation}>
            <Link text="Home" href="#sec-1" />
            <Link text="Aboute Us" href="#sec-2" />
            <Link text="Our Menu" href="#sec-3" />
            <Link text="Pages" href="#sec-4" />
            <Link text="Blog" href="#sec-5" />
          </div>
          {/* Icons */}
          <div className={styles.icons}>
            <div className={styles.icon}>
              <img src={Instagram} alt="intagramm" />
            </div>
            <div className={styles.numbers}>
              <Link
                text="+380984956069"
                href="tel:+380984956069"
                type={LinkTypes.WHITE}
              />
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
