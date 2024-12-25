import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAdd }) => {
    const id = useId();
    const initialValues = {
        name: "",
        number: "",
    };

    const handleSubmit = (values, actions) => {
        onAdd(values);
        actions.resetForm();
    };
    const phoneRegex = /\d{3}-\d{2}-\d{2}/;

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Name must be at least 3 characters")
            .max(50, "Name must be 50 characters or less")
            .required("Name is required"),
        number: Yup.string()
            .matches(phoneRegex, "Invalid phone number")
            .required("Phone number is required"),
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <Form className={css.form}>
                <label htmlFor={`${id}-name`}>Name</label>
                <Field type="text" name="name" id={`${id}-name`} />
                <ErrorMessage name="name" component="span" />

                <label htmlFor={`${id}-number`}>Number</label>
                <Field type="tel" name="number" id={`${id}-number`} />
                <ErrorMessage name="number" component="span" />

                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;