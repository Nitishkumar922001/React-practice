
import { useState } from 'react';
import './App.css';
import UserList from './components/User/UserList';
import UserForm from './components/UserForm/UserForm';

function App() {
const [userList,setUserList]=useState([]);
function adduser(user)
{
  setUserList([...userList,user]);
}
  return (
    <div className="App">
     <UserForm addusers={adduser}/>
     <UserList userLists={userList}/>
    </div>
  );
}

export default App;
