import { useLocation, useParams } from "react-router-dom";

function UserParamsHook()
{ 
    const param=useParams();
    const location=useLocation();
    const {name}=param;
    return(<>
        <h2>example of useParams react-router hook url='/user/:name'</h2>
        <p>
    {console.log(location)}
        {name}</p>
    </>)
}
export default UserParamsHook;