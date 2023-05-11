import { Link, NavLink } from "react-router-dom";

function Nav1()
{
    return(
    <>
    <Link to='/signup'>signup</Link>
    <br></br>
    <Link to='/home'>home</Link>
    <br/>
    <Link to='/user/yashmonkey'>useParams</Link>
    <br/>
   <NavLink className="bg-color " to="/navlink">NavLink</NavLink>
  <br/>
  <br/>
   <NavLink style={({isActive})=>({backgroundColor:isActive?'green':'red'})}to="/navlink">NavLink-example2</NavLink>
    </>)
}
export default Nav1;