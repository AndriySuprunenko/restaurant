import Formik from './Formik';
import styles from './form.module.scss';
import Cart from '../../assets/images/cart-10.png';

const Form = () => {
  return(
    <section className={styles.form} id='sec-6'>
      <div className={styles.form__image}>
        <img src={Cart} alt="img" />
      </div>
      <Formik></Formik>
    </section>
  )
}

export default Form;