import { useState } from "react";

function RoutingWithoutPackage()
{ 
   let componet;
   switch(window.location.pathname)
   {
    case "/":
        componet=<h1>home</h1>
        break; 
    case '/about':
    componet=<h1>about</h1>
    break;
    default:
    componet=<h1>error</h1>
    break;
   }

    return <div>
        {componet}
        </div>
}
export default RoutingWithoutPackage;