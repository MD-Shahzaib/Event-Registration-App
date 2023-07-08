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
                {/* Add more form fields */}
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
