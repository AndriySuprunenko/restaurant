// Imports
import classNames from 'classnames';
import { ButtonTypes } from '../../types/Button';
import styles from './button.module.scss';


// Button
const Button = ({tipe='button',text, type=ButtonTypes.BLACK}) => {
  let typeClass;
  switch (type){
    case ButtonTypes.GOLD: {
      typeClass = styles.button__gold;
      break;
    }
    case ButtonTypes.WHITE_GOLD: {
      typeClass = styles.button__white_gold;
      break;
    }
    case ButtonTypes.WHITE_BLACK: {
      typeClass = styles.button__white_black;
      break;
    }
    case ButtonTypes.BLACK_GOLD: {
      typeClass = styles.button__black_gold;
      break;
    }
    default: {
      typeClass = styles.button__black;
    }
  }


  return (
    <button type={tipe} className={classNames(styles.button, typeClass)}><span>{text}</span></button>
  );
};

export default Button;