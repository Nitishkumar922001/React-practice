import { useState } from "react";
import useValidate from "../Hooks/use-validate";

function nameValidtion(value) {
  if (value.trim() !== "") {
    return true;
  } else {
    return false;
  }
}

function emailValidtion(value) {
  if (value.trim() !== ""&&value.includes('@')) 
  {
    return true;
  } else {
    return false;
  }
}




const SimpleInput = (props) => {
  const {
    enteredValue: name,
    onChangeHandler: nameOnChangeHandler,
    onBlurHandler: nameOnBlurHandler,
    valueIsInValid: nameisInvalid,
    valueIsValid: nameisvalid,
    reset: nameReset,
  } = useValidate(nameValidtion);

  const {
    enteredValue: email,
    onChangeHandler: emailOnChangeHandler,
    onBlurHandler: emailOnBlurHandler,
    valueIsInValid: emailisInvalid,
    valueIsValid: emailisvalid,
    reset: emailReset,
  } = useValidate( emailValidtion);

  let formisValid = false;
  if (nameisvalid && emailisvalid) {
    formisValid = true;
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    nameOnBlurHandler();
    emailOnBlurHandler();
    if (!formisValid) {
      console.log("error");
      return;
    }
    console.log(name, email);
    nameReset();
    emailReset();
  }
  const EmailInputClasses = emailisInvalid
    ? "form-control invalid"
    : "form-control ";
  const NameInputClasses = nameisInvalid
    ? "form-control invalid"
    : "form-control ";



  return (
    <form>
      <div className={NameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameOnChangeHandler}
          value={name}
          onBlur={nameOnBlurHandler}
        />
        {nameisInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>

      <div className={EmailInputClasses}>
        <label htmlFor="email">Your Email </label>
        <input
          type="email"
          id="email"
          onChange={emailOnChangeHandler}
          value={email}
          onBlur={emailOnBlurHandler}
        />
        {emailisInvalid && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>

      <div className="form-actions">
        <button onClick={onSubmitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
