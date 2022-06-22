import classNames from 'classnames';
import { InputTypes } from 'types/Input';
import styles from './input.module.scss';

const Input = ({
  name,
  placeholder,
  types = InputTypes.NAME,
  type = 'text',
  val,
  onChange,
  onBlur,
}) => {
  let typeClass;
  switch (types) {
    case InputTypes.DATE: {
      typeClass = styles.input_width2;
      break;
    }
    case InputTypes.TIMING: {
      typeClass = styles.input_width2;
      break;
    }
    case InputTypes.PERSONS: {
      typeClass = styles.input_width2;
      break;
    }
    case InputTypes.EMAIL: {
      typeClass = styles.input_width1;
      break;
    }
    case InputTypes.NAME: {
      typeClass = styles.input_width1;
      break;
    }
    default: {
      typeClass = styles.input_width2;
    }
  }

  return (
    <input
      type={type}
      name={name}
      className={classNames(styles.input, typeClass)}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      value={val}
    />
  );
};

export default Input;
