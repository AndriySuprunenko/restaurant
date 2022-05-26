// Imports
import classNames from 'classnames';
import styles from './link.module.scss';
import styleHeader from '../../components/header/navigation.module.scss';

// Link
const Link = ({text}) => {
  return (
    <a className={classNames(styles.link, styleHeader.link )} href='https://#'>
      <span>
        {text}
      </span>
    </a>
  );
};

export default Link;