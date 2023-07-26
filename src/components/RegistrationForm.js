// After backend Setup code.
import React from "react";
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";

const RegistrationForm = () => {

  const { id } = useParams();

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission and store registration data in to database.
    fetch("http://localhost:5000/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Registration successful:", data);
        // You can redirect to the confirmation page here if needed.
      })
      .catch((error) => console.error("Error submitting registration:", error))
      .finally(() => setSubmitting(false));
  };

  const validateForm = (values) => {
    // Add form validation logic here using Yup or custom validation.
    const errors = {};
    // Perform validation on form fields and populate the errors object if necessary.
    return errors;
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <Formik
        initialValues={{ name: "", email: "" }}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;











/*
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function RegistrationForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            // Add more form fields here
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            // Add validation for other fields
        }),
        onSubmit: values => {
            fetch('/api/register', values)
                .then(response => {
                    // Handle successful registration
                })
                .catch(error => {
                    // Handle registration error
                });
        },
    });

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-500">{formik.errors.name}</div>
                    ) : null}
                </div>
                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="text-red-500">{formik.errors.email}</div>
                    ) : null}
                </div>
                // Add more form fields.
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
*/




















/*
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const RegistrationForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission and store registration data in the backend or database
    console.log(values); // Replace with your submission logic
    setSubmitting(false);
  };

  const validateForm = (values) => {
    // Add form validation logic here using Yup or custom validation
    const errors = {};
    // Perform validation on form fields and populate the errors object if necessary
    return errors;
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <Formik
        initialValues={{ name: "", email: "", eventId: "" }}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="eventId">Event:</label>
            <Field as="select" id="eventId" name="eventId">
              // Populate the select options with event data.
              </Field>
              <ErrorMessage name="eventId" component="div" />
            </div>
  
            <button type="submit">Register</button>
          </Form>
        </Formik>
      </div>
    );
  };
  
  export default RegistrationForm;
*/
