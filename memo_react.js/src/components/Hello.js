import { memo, useState } from "react";
import Button from "./UI/Button/Button";
function Hello ()
{ const [UpdateHello,setUpdateHello]=useState(1);
    console.log('rendering hello ');
    return(  <>
     <h1>Hi there!</h1>
    {/* <Button onClick={()=>setUpdateHello(!UpdateHello)}>UpdateHello</Button> */}
    </>
    );
}
export default memo(Hello);