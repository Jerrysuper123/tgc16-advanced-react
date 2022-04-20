import React from "react";

//useNavigate is a hook -
//hook is a function you call to add features to your functional base
//share common functionality or data
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function ContactUs() {
  const [formState, setFormState] = useState({
    fullname: "",
    email: "",
  });

  const updateFormField = (event) => {
    setFormState({
      ...formState,
      //last keyvalue pair will replace the previous keyvalue pair for the same key
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();
  //if use dom version 5
  //const history = useHistory();
  //history.push("/submitted-form")

  function submitForm() {
    //   state must be name as "state"
    navigate("/submitted-form", {
      state: {
        formData: formState,
      },
    });
  }

  return (
    <React.Fragment>
      <h1>Contact us</h1>
      <div>
        <label>Full name:</label>
        <input
          type="text"
          name="fullname"
          value={formState.fullname}
          onChange={updateFormField}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formState.email}
          onChange={updateFormField}
        />
      </div>

      {/* version 6, use navigation */}
      <button onClick={submitForm}>submit</button>
    </React.Fragment>
  );
}
