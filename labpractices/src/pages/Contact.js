import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const onSubmitForm = () => {
    navigate("/thank", {
      state: {
        formData: formState,
      },
    });
  };

  const [formState, setFormState] = React.useState({
    name: "your name",
    feedback: "give us a feedback",
  });

  const updateFormField = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <h1>Contact us form</h1>
      <div>
        <label>name</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={updateFormField}
        />
      </div>

      <div>
        <label>Feedback</label>
        <input
          type="text"
          name="feedback"
          value={formState.feedback}
          onChange={updateFormField}
        />
      </div>

      <button onClick={onSubmitForm}>Submit</button>
    </React.Fragment>
  );
}
