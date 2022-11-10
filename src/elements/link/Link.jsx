// Imports
import classNames from 'classnames';
import styles from './link.module.scss';
import { LinkTypes } from 'types/Link';
import styleHeader from '../../components/header/navigation.module.scss';

// Link
const Link = ({ text, href , type=LinkTypes.WHITE}) => {
  let typeClass;
  switch (type) {
    case LinkTypes.BUTTON_BLACK: {
      typeClass = styles.link__button_black;
      break;
    }
    default: {
      typeClass = styles.link;
    }
  }
  return (
    <a className={classNames(typeClass, styleHeader.link)} href={href}>
      <span>{text}</span>
    </a>
  );
};

export default Link;
