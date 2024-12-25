import css from './ContactForm.module.css';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 letters')
    .max(50, 'Maximum 50 letters')
    .required('Required'),
  number: Yup.string()
    .min(9, 'Phone number must be like 123-45-67')
    .required('Required'),
});

export default function ContactForm({ onAdd }) {
  const id = useId();

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const form = event.target;

  //   onAdd({
  //     id: nanoid(),
  //     name: form.elements.username.value,
  //     number: form.elements.phoneNumber.value,
  //   });

  //   form.reset();
  // };

  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.group}>
            <label htmlFor={`name-${id}`}>Name</label>
            <Field
              className={css.contactInfo}
              type="text"
              name="name"
              id={`name-${id}`}
            />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.group}>
            <label htmlFor={`number-${id}`}>Number</label>
            <Field
              className={css.contactInfo}
              type="text"
              name="number"
              id={`number-${id}`}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>
          <button className={css.addBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}