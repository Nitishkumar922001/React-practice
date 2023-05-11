import { useParams } from "react-router-dom";

function UserParamsHook()
{ 
    const param=useParams();
    const {name}=param;
    return(<>
        <h2>example of useParams react-router hook url='/user/:name'</h2>
        <p>
    
        {name}</p>
    </>)
}
export default UserParamsHook;