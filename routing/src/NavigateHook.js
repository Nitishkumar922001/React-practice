import { useNavigate } from "react-router-dom";
function NavigateHook()
{
    const navi=useNavigate()
    function navigate()
    { let error=1;
        if(error)
        { navi('/home')

        }
        else
        {
            navi('/about')
        }
    

    }
    return(
        <div>
            <button onClick={()=>navigate()}>
                Home
            </button>
        </div>
    )

}
export default NavigateHook;