import React, { useState } from "react";
import Card from "../UI/Card";

import "./NewUserForm.css";

const NewUserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (userName.length === 0 || userAge.length === 0) {
      props.errorHandler({
        title: "Invalid Input",
        message: "Please enter a valid nama and age (non-empty values).",
        button: "Okay",
      });
    } else {
      props.onNewUser({
        name: userName,
        age: userAge,
      });
      setUserName("");
      setUserAge("");
    }
    console.log("submitted");
  };

  return (
    <div className="new-user">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="new-user__controls">
            <div className="new-user__control">
              <label>Username</label>
              <input type="text" onChange={nameChangeHandler} value={userName}/>
            </div>
            <div className="new-user__control">
              <label>Age (Years)</label>
              <input type="text" onChange={ageChangeHandler} value={userAge} />
            </div>
          </div>
          <div className="new-user__actions">
            <button type="submit">Add User</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewUserForm;
