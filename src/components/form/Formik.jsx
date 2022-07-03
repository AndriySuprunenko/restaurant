import styles from './formik.module.scss';
import { Formik } from 'formik';
import Input from 'elements/input/Input';
import { InputTypes } from 'types/Input';

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
      errors.email = '';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = styles.errors;
    }
    if (!values.name) {
      errors.name = '';
    }
    if (!values.persons) {
      errors.persons = '';
    }
    if (!values.timing) {
      errors.timing = '';
    }
    if (!values.date) {
      errors.date = '';
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
    <div className={styles.formik}>
      <div className={styles.formik__title}>RESERVATION</div>
      <div className={styles.formik__subtitle}>Book Your Table</div>
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
            <div className={styles.castom_screen}>
              <div className={styles.block}>
                {/* Name */}
                <Input
                  type="text"
                  types={InputTypes.NAME}
                  name="name"
                  placeholder="Name"
                  val={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.name && touched.name && errors.name}

                {/* Email */}
                <Input
                  type="email"
                  types={InputTypes.EMAIL}
                  name="email"
                  placeholder="Email"
                  val={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.email && touched.email && errors.email}
              </div>

              <div className={styles.block}>
                {/* Persons */}
                <Input
                  type="text"
                  types={InputTypes.PERSONS}
                  name="persons"
                  placeholder="Persons"
                  val={values.persons}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.persons && touched.persons && errors.persons}

                {/* Timing */}
                <Input
                  type="text"
                  types={InputTypes.TIMING}
                  name="timing"
                  placeholder="Timing"
                  val={values.timing}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.timing && touched.timing && errors.timing}

                {/* Date */}
                <Input
                  type="text"
                  types={InputTypes.DATE}
                  name="date"
                  placeholder="Date"
                  val={values.date}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.date && touched.date && errors.date}
              </div>
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
