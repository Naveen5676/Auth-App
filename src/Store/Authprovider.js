import React, { useState } from "react";
import Authcontext from "./Authcontext";



const Authprovider=(props)=>{

const [token , setToken] =useState(null);

const userIsLogedIn = !!token

const loginHandler=(token)=>{
    setToken(token);
}
const logoutHandler=()=>{
    setToken(null);
}

const contextValue={
token:token,
isLoggedIn:userIsLogedIn,
login:loginHandler,
logout:logoutHandler,
}
return (
  <Authcontext.Provider value={contextValue}>
    {props.children}
  </Authcontext.Provider>
);
}

export default Authprovider