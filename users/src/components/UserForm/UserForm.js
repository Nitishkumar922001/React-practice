import { useState } from "react";
import ErrorDialogBox from "../UI/ErrorDialogBox.js";
import ErrorPopUp from "../UI/ErrorDialogBox.js";
import "./UserForm.css";
function UserForm(props) {
  const [user, setUser] = useState({ userName: "", age: "" });
  const [error,setError]=useState();

  function onChangeHandler(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function onsubmitHandler(event) {
    event.preventDefault();
    if(user.userName.length===0)
    {setError('user name felid can not be empty')
      return;
    }
    if(user.age<1)
    { 
    setError('user age must be (>0) years');  
    return;
    }
    props.addusers(user);
    setUser({userName:'',age:''});
  }
  function errorHandler()
  {
    setError();
  return;
  }
  return (
       <>
      {error&&<ErrorDialogBox errHandler={errorHandler} errormsg={error}/>}
    <form className="form-div">
      <div className="input-group">
        <label htmlFor="userName">userName</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={user.userName}
          onChange={onChangeHandler}
        />
      </div>
      <div className="input-group">
        <label htmlFor="age">Age(Years)</label>
        <input type="number" min={1} id="age" name="age" value={user.age}onChange={onChangeHandler} />
      </div>
      <button onClick={onsubmitHandler}>Add user </button>
    </form>
     </>
  );
}
export default UserForm;
