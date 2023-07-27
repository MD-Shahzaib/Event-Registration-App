// import React from "react";
// import { useParams } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// function RegistrationForm() {

//   const { id } = useParams();
//   const initialValues = {
//     name: "",
//     email: "",
//     eventId: "",
//   };

//   const validationSchema = Yup.object({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string().email("Invalid email address").required("Email is required"),
//     eventId: Yup.string().required("Please select an event"),
//   });

//   const handleSubmit = (values, { setSubmitting }) => {
//     // Handle form submission and store registration data in the database.
//     fetch("http://localhost:5000/api/events", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ ...values, id }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Registration successful:", data);
//         // You can redirect to the confirmation page here if needed.
//       })
//       .catch((error) => console.error("Error submitting registration:", error))
//       .finally(() => setSubmitting(false));
//   };

//   return (
//     <>
//       <div className="max-w-md mx-auto mt-10 px-4 py-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
//         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
//           {({ isSubmitting }) => (
//             <Form>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
//                   Name:
//                 </label>
//                 <Field
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
//                 />
//                 <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
//                   Email:
//                 </label>
//                 <Field
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
//                 />
//                 <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="eventId" className="block text-gray-700 text-sm font-bold mb-2">
//                   Event:
//                 </label>
//                 <Field
//                   as="select"
//                   id="eventId"
//                   name="eventId"
//                   className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
//                 >
//                   Populate the select options with event data.
//                 </Field>
//                 <ErrorMessage name="eventId" component="div" className="text-red-600 text-sm mt-1" />
//               </div>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
//               >
//                 {isSubmitting ? "Submitting..." : "Register"}
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </>
//   );
// }

// export default RegistrationForm;
















import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function RegistrationForm() {
  const { id } = useParams();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch events data from the backend API
  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const initialValues = {
    name: "",
    email: "",
    eventId: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    eventId: Yup.string().required("Please select an event"),
  });

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

  return (
    <>
      <div className="max-w-md mx-auto mt-10 px-4 py-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Registration Form (1)</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
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

              <div className="mb-4">
                <label htmlFor="eventId" className="block text-gray-700 text-sm font-bold mb-2">
                  Event:
                </label>
                {loading ? (
                  <div>Loading events...</div>
                ) : (
                  <Field
                    as="select"
                    id="eventId"
                    name="eventId"
                    className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select an event</option>
                    {events.map((event) => (
                      <option key={event._id} value={event._id}>
                        {event.title}
                      </option>
                    ))}
                  </Field>
                )}
                <ErrorMessage name="eventId" component="div" className="text-red-600 text-sm mt-1" />
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
    </>
  );
}

export default RegistrationForm;
