import './User.css'
function User(props)
{
    return (
        <li className="user-item">
            <p>{props.userName} ({props.age} Years old )</p>
        </li>
    )
}
export default User;