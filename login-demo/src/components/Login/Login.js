import React, { useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

function emailReducer(state,action) {
  if (action.type=== "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if(action.type==="INPUT_BLUR") 
  {
    return { value: state.value, isValid: state.value.includes("@") };
  }
}

function passwordReducer(state, action) {
  if ((action.type ==="USER_INPUT")) {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if ((action.type === "INPUT_BLUR")) {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, emailDF] = useReducer(emailReducer,
    {
    value: "",
    isValid:0,
  });
  const [passwordState, passwordDF] = useReducer(passwordReducer, {
    value: "",
    isValid: 0,
  });

  useEffect(() => {
   const id= setTimeout(()=>{
    console.log("EFFECT RUNNING");
    setFormIsValid(
      emailState.isValid&& passwordState.isValid > 6
    );
    },500)


    return () => {
      console.log("EFFECT CLEANUP");
      clearTimeout(id)
    };
  }, [passwordState.isValid,emailState.isValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    emailDF({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(
      event.target.value.includes("@") && passwordState.value.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    passwordDF({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(
      emailState.value.includes("@") && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    emailDF({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    passwordDF({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
