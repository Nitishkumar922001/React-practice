import { useState } from "react";

function useValidate (validate)
{ const [enteredValue,setEnteredValue]=useState('');
const [inputTouched,setInputTouched]=useState(false);

const valueIsValid=validate(enteredValue);
const valueIsInValid=!valueIsValid&&inputTouched;

const onChangeHandler=(event)=>
{
setEnteredValue(event.target.value);
}

const onBlurHandler=(event)=>
{
setInputTouched(true);
}

const reset = () => {
    setEnteredValue('');
    setInputTouched(false);
  };

return({enteredValue,
 valueIsValid,
 valueIsInValid,
 onBlurHandler,
 onChangeHandler,
 reset
})



}
export default useValidate;