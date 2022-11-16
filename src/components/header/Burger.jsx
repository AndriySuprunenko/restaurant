import Link from 'elements/link/Link';
import { useEffect } from 'react';
import styles from './burger.module.scss';
import './nav.css';

const Burger = () => {
  useEffect(() => {
    const hamb = document.querySelector('#hamb');
    const popup = document.querySelector('#popup');
    hamb.addEventListener('click', open);
    popup.addEventListener('click', open);
    return () => {
      hamb.removeEventListener('click', open);
      popup.removeEventListener('click', open);
    };
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
          <div className={styles.link}>
            <Link text="Home" href="#sec-2" />
          </div>
          <div className={styles.link}>
            <Link text="Aboute Us" href="#sec-2" />
          </div>
          <div className={styles.link}>
            <Link text="Our Menu" href="#sec-3" />
          </div>
          <div className={styles.link}>
            <Link text="Pages" href="#sec-4" />
          </div>
          <div className={styles.link}>
            <Link text="Blog" href="#sec-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Burger;
