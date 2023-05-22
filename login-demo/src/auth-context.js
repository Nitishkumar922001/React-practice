import React from "react";

const AuthContext=React.createContext(
{
    isLoggedIn:'',
    loginHandler:()=>{},
    logoutHandler:()=>{}
}

)
export default AuthContext;