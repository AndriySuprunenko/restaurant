// Imports
import styles from './header.module.scss';
import Button from '../../elements/button/Button';
import Link from '../../elements/link/Link';
import { ButtonTypes } from '../../types/Button';
import Logo from '../../assets/images/LOGO.png';

// Header
const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo_container}>
        <div className={styles.header__button}>
          <Button text="Reservation" type={ButtonTypes.GOLD} />
        </div>
        <div className={styles.header__logo}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.header__button}>
          <Link text="+380984956069" href="tel:+380984956069" />
        </div>
      </div>
      {/* Line */}
      <hr size="2" noshade className={styles.header__line} />
    </header>
  );
};

export default Header;
