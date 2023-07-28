/*
Step 7: Update Frontend Components
In your frontend components, implement registration and login functionality using the fetch method to interact with the backend API.

For example, in RegistrationForm.js, you can update the handleSubmit function as follows:
*/

/*
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const RegistrationForm = () => {
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/register/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();
            console.log("Registration successful - Token:", data.token);
            // You can store the token in local storage or a state management library for future API calls
            setSubmitting(false);
        } catch (error) {
            console.error("Error submitting registration:", error);
            setSubmitting(false);
        }
    };

    // ...
};

export default RegistrationForm;
*/

/*
Similarly, you can implement the login functionality in the LoginForm.js component.

With these changes, your app should now support user and admin registration and login functionality with JWT authentication and password encryption using bcryptjs. The backend will generate tokens upon successful registration and login, which can be used to protect certain routes and allow authorized access.
*/



/*
Sure! Let's implement the login functionality in the LoginForm.js component. We'll use the fetch method to interact with the backend API for user authentication.

LoginForm.js:
*/


/*
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginForm = () => {
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();
            if (data.token) {
                console.log("Login successful - Token:", data.token);
                // You can store the token in local storage or a state management library for future API calls
                // Redirect the user to the protected page or perform any other action on successful login
            } else {
                console.log("Login failed - Invalid credentials");
                // Handle login failure (e.g., show an error message)
            }

            setSubmitting(false);
        } catch (error) {
            console.error("Error logging in:", error);
            setSubmitting(false);
        }
    };

    // ...

    return (
        <div>
            <h2>Login Form</h2>
            <Formik
                initialValues={{ email: "", password: "" }}
                validate={validateForm}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>

                    <div>
                        <label htmlFor="password">Password:</label>
                        <Field type="password" id="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>

                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginForm;
*/


/*
In the LoginForm.js component, we added the handleSubmit function, which is called when the login form is submitted. It sends a POST request to the /api/auth/login endpoint on the backend with the email and password provided by the user.

Upon receiving the response from the backend, we check if the response contains a token. If a token is present, it means that the login was successful. You can then handle the token as needed (e.g., store it in local storage or state management) for future API calls or protected route access.

If the response does not contain a token, it means that the login failed due to invalid credentials, and you can handle the failure accordingly (e.g., show an error message to the user).

Remember to adjust the form validation logic (validateForm) and component structure to suit your specific requirements. Additionally, for a complete implementation, consider adding error handling and displaying error messages when there are login failures or backend errors.
*/