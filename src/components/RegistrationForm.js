{/* REGISTRATION-FORM (1) [IMPORT] */ }
import React from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
{/* REGISTRATION-FORM (1) [IMPORT] */ }


{/* REGISTRATION-FORM (2) [IMPORT] */ }
import React from "react";
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
{/* REGISTRATION-FORM (2) [IMPORT] */ }


{/* REGISTRATION-FORM (5) [IMPORT] */ }
import React from "react";
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
{/* REGISTRATION-FORM (5) [IMPORT] */ }


{/* REGISTRATION-FORM (4) [IMPORT] */ }
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
{/* REGISTRATION-FORM (4) [IMPORT] */ }


{/* REGISTRATION-FORM (3) [IMPORT] */ }
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
{/* REGISTRATION-FORM (3) [IMPORT] */ }


function RegistrationForm() {


  {/* REGISTRATION-FORM (1) [JS] */ }
  const { id } = useParams();
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission and store registration data in the database.
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
  {/* REGISTRATION-FORM (1) [JS] */ }


  {/* REGISTRATION-FORM (2) [JS] */ }
  const { id } = useParams();
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission and store registration data in the database.
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
  {/* REGISTRATION-FORM (2) [JS] */ }


  {/* REGISTRATION-FORM (5) [JS] */ }
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
  {/* REGISTRATION-FORM (5) [JS] */ }


  {/* REGISTRATION-FORM (4) [JS] */ }
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
  {/* REGISTRATION-FORM (4) [JS] */ }


  {/* REGISTRATION-FORM (3) [JS] */ }
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
  {/* REGISTRATION-FORM (3) [JS] */ }


  return (
    <>


      {/* REGISTRATION-FORM (1) [HTML] */}
      <div className="max-w-md mx-auto mt-10 px-4 py-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
        <Formik
          initialValues={{ name: "", email: "" }}
          validate={validateForm}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name:
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email:
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
              >
                {isSubmitting ? "Submitting..." : "Register"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      {/* REGISTRATION-FORM (1) [HTML] */}


      {/* REGISTRATION-FORM (2) [HTML] */}
      <div className="p-8 mx-auto max-w-md bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Registration Form</h2>
        <Formik
          initialValues={{ name: "", email: "" }}
          validate={validateForm}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium text-gray-700">
                Name:
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Register
            </button>
          </Form>
        </Formik>
      </div>
      {/* REGISTRATION-FORM (2) [HTML] */}


      {/* REGISTRATION-FORM (5) [HTML] */}
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
      {/* REGISTRATION-FORM (5) [HTML] */}


      {/* REGISTRATION-FORM (4) [HTML] */}
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
                {/* Populate the select options with event data. */}
              </Field>
              <ErrorMessage name="eventId" component="div" />
            </div>
            <button type="submit">Register</button>
          </Form>
        </Formik>
      </div>
      {/* REGISTRATION-FORM (4) [HTML] */}


      {/* REGISTRATION-FORM (3) [HTML] */}
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
          {/* Add more form fields. */}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">Register</button>
        </form>
      </div>
      {/* REGISTRATION-FORM (3) [HTML] */}


    </>
  );
}
export default RegistrationForm;