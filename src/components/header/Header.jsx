// Imports
import styles from './header.module.scss';
import Logo from '../../assets/images/LOGO.png';

// Header
const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo_container}>
        <div className={styles.header__logo}>
          <img src={Logo} alt="logo" />
        </div>
      </div>
      {/* Line */}
      <hr size="2" noshade className={styles.header__line} />
    </header>
  );
};

export default Header;
