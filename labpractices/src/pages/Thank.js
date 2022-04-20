import React from "react";
import { useLocation } from "react-router-dom";

export default function Thank() {
  const location = useLocation();
  let name = location.state.formData.name;
  let feedback = location.state.formData.feedback;

  return (
    <React.Fragment>
      <h1>Thank you for submitting your feedback!</h1>
      <p>{name}</p>
      <p>{feedback}</p>
    </React.Fragment>
  );
}
