import styles from './formik.module.scss';
import { Formik } from 'formik';
import classNames from 'classnames';

const Form = () => {
  const initialValues = {
    name: '',
    email: '',
    persons: '',
    timing: '',
    date: '',
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.persons) {
      errors.persons = 'Required';
    }
    if (!values.timing) {
      errors.timing = 'Required';
    }
    if (!values.date) {
      errors.date = 'Required';
    }
    return errors;
  };

  return (
    <div className={styles.formik}>
      <div className={styles.formik__title}>RESERVATION</div>
      <div className={styles.formik__subtitle}>Book Your Table</div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          // resetForm,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.input__block}>
              {/* Name */}
              <input
                type="text"
                name="name"
                className={classNames(styles.input, styles.input_width1)}
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}

              {/* Email */}
              <input
                type="email"
                name="email"
                className={classNames(styles.input, styles.input_width1)}
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
            </div>

            <div className={styles.input__block}>
              {/* Persons */}
              <input
                type="number"
                name="persons"
                step={1}
                min={1}
                max={8}
                className={classNames(styles.input, styles.input_width2)}
                placeholder="Persons"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.persons}
              />
              {errors.persons && touched.persons && errors.persons}

              {/* Timing */}
              <input
                type="text"
                name="timing"
                className={classNames(styles.input, styles.input_width2)}
                placeholder="Timing"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.timing}
              />
              {errors.timing && touched.timing && errors.timing}

              {/* Date */}
              <input
                type="text"
                name="date"
                className={classNames(styles.input, styles.input_width2)}
                placeholder="Date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
              {errors.date && touched.date && errors.date}
            </div>
            {/* Button */}
            <button
              className={styles.button}
              type="submit"
              disabled={isSubmitting}
            >
              <span>Book A Table</span>
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
