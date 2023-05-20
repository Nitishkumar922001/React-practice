import User from "./User";
import './User.css'
function UserList(props)
{
    return (
        <ul className="user-list">
           { props.userLists.map((user,index)=><User key={index} userName={user.userName} age={user.age}/>)
           }
        </ul>
    )

}
export default UserList;