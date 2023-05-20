import { useState } from "react";
import "./UserForm.css";
function UserForm(props) {
  const [user, setUser] = useState({ userName: "", age: "" });

  function onChangeHandler(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function onsubmitHandler(event) {
    event.preventDefault();
    props.addusers(user);
    setUser({userName:'',age:''});
  }
  return (
    //    <div >
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
        <input type="number" id="age" name="age" value={user.age}onChange={onChangeHandler} />
      </div>
      <button onClick={onsubmitHandler}>Add user </button>
    </form>
    // </div>
  );
}
export default UserForm;
