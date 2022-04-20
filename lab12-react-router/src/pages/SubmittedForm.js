import React from "react";

//uselocation to retrieve form data
//in html specs, location refers to 1 url (w3c committee)
import { useLocation } from "react-router-dom";

export default function SubmittedForm() {
  //location can retrieve form data from navigate in ContactUs.js
  const location = useLocation();
  let fullname = location.state.formData.fullname;
  let email = location.state.formData.email;

  return (
    <React.Fragment>
      <h1>Thank you for contacting us</h1>
      <p>{fullname}</p>
      <p>{email}</p>
      <p>We will forward the feedback to relevant department</p>
    </React.Fragment>
  );
}
