import { Link, NavLink } from "react-router-dom";

function Nav1()
{
    return(
    <>
    <Link to='/signup'>signup</Link>
    <br></br>
    <Link to='/home'>home</Link>
    <br/>
    <Link to='/user/yashmonkey' state={{age:18,name:'nitish',city:'solaput'}}>useParams</Link>
    <br/>
   <NavLink className="bg-color " to="/navlink">NavLink</NavLink>
  <br/>
  <br/>
   <NavLink style={({isActive})=>({backgroundColor:isActive?'green':'red'})}to="/navlink">NavLink-example2</NavLink>
    
    <br></br>
    <Link to="/navigatehook">NavigateHook</Link>
    <Link to="/useSerachparams?name=nitish&age=22&userId=1">UseSearchParamsHook</Link>
    </>)
}
export default Nav1;