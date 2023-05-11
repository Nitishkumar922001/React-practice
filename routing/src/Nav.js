import { Link } from "react-router-dom";

function Nav1()
{
    return(
    <>
    <Link to='/signup'>signup</Link>
    <br></br>
    <Link to='/home'>home</Link>
    <br/>
    <Link to='/user/yashmonkey'>user</Link>
    </>)
}
export default Nav1;