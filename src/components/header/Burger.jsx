import Link from 'elements/link/Link';
import { useEffect } from 'react';
import styles from './burger.module.scss';
import './nav.css';

const Burger = () => {
  useEffect(() => {
    const hamb = document.querySelector('#hamb');
    hamb.addEventListener('click', open);
  });
  
  const open = (e) => {
    const popup = document.querySelector('#popup');
    const hamb = document.querySelector('#hamb');
    popup.classList.toggle('open');
    hamb.classList.toggle('open');
  };

  return (
    <>
      <div className="hamb">
        <div className="hamb__field" id="hamb">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div className="popup" id="popup">
        <div className={styles.menu__link}>
          <div className={styles.link} id="link">
            <Link text="Home" href="#sec-1" />
          </div>
          <div className={styles.link} id="link">
            <Link text="Aboute Us" href="#sec-2" />
          </div>
          <div className={styles.link} id="link">
            <Link text="Our Menu" href="#sec-3" />
          </div>
          <div className={styles.link} id="link">
            <Link text="Pages" href="#sec-4" />
          </div>
          <div className={styles.link} id="link">
            <Link text="Blog" href="#sec-5" />
          </div>
          <div className={styles.link} id="link">
            <Link text="Contact Us" href="#sec-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Burger;
