import React from "react";

//useNavigate is a hook -
//hook is a function you call to add features to your functional base
//share common functionality or data
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function ContactUs() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  //if use dom version 5
  //const history = useHistory();
  //history.push("/submitted-form")

  function submitForm() {
    navigate("/submitted-form");
  }

  return (
    <React.Fragment>
      <h1>Contact us</h1>
      <div>
        <label>Full name:</label>
        <input
          type="text"
          name="fullname"
          value={fullname}
          onChange={(event) => {
            setFullName(event.target.value);
          }}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>

      {/* version 6, use navigation */}
      <button onClick={submitForm}>submit</button>
    </React.Fragment>
  );
}
