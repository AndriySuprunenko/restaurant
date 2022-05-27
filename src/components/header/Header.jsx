// Imports
import styles from './header.module.scss';
import Button from '../../elements/button/Button';
import { ButtonTypes } from '../../types/Button';
import Logo from '../../assets/images/logo.png';

// Header
const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo_container}>
        <div className={styles.header__button}>
          <Button text='Call - 123 456 789' />
        </div>
        <div className={styles.header__logo}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.header__button}>
          <Button text='Reservation' type={ButtonTypes.GOLD} />
        </div>
      </div>
      {/* Line */}
      <hr size="2" noshade className={styles.header__line} />
    </header>
  );
};

export default Header;
