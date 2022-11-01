import styles from './footer.module.scss';
import Logo from '../../assets/images/LOGO.png';
import Facebook from '../../assets/images/facebook.png';
import Instagram from '../../assets/images/instagram.png';
import Pinterest from '../../assets/images/pinterest.png';
import Twitter from '../../assets/images/twitter.png';
import { Formik } from 'formik';

const Footer = () => {
  const initialValues = {
    email: '',
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = '';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = styles.errors;
    }
    return errors;
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
    }, 400);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left */}
        <div className={styles.footer__block}>
          <div className={styles.footer__hashtag}>#TheTastEat</div>
          <div className={styles.footer__subtitle}>CONTACT</div>
          <div className={styles.footer__text_left}>
            5 Rue Dalou, 75015 Paris
          </div>
          <div className={styles.footer__text_gold}>+123 456 789</div>
          <div className={styles.footer__text_gold}>josefin@mail.com</div>
        </div>
        {/* Center */}
        <div className={styles.footer__block}>
          <div className={styles.footer__logo}>
            <img src={Logo} alt="logo" />
          </div>
          <div className={styles.footer__text}>
            Join our mailing list for updates, Get news & offers events.
          </div>

          <div>
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={onSubmit}
            >
              {({
                values,
                resetForm,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className={styles.block}>
                    {/* Email */}
                    <input
                      type="email"
                      name="email"
                      className={styles.input}
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && errors.email}
                    {/* Button */}
                    <button
                      className={styles.button}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <span>Book A Table</span>
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
        {/* Right */}
        <div className={styles.footer__block}>
          <div className={styles.images}>
            <div className={styles.image1}>
              <img src={Twitter} alt="twitter" />
            </div>
            <div className={styles.image2}>
              <img src={Instagram} alt="instagram" />
            </div>
            <div className={styles.image3}>
              <img src={Facebook} alt="facebook" />
            </div>
            <div className={styles.image4}>
              <img src={Pinterest} alt="pinterest" />
            </div>
          </div>
          <div className={styles.footer__subtitle_right}>WORKING HOURS</div>
          <div className={styles.footer__text_gold}>
            Mon – Sat:{' '}
            <span className={styles.footer__text_left}>7.00am – 6.00pm</span>
          </div>
          <div className={styles.footer__text_gold}>
            Sun:{' '}
            <span className={styles.footer__text_left}>8.00am – 6.00pm</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
