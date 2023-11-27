 import React from "react";

 const Authcontext = React.createContext({
   token: "",
   isLoggedIn: false,
   login: (token) => {},
   logout: () => {},
 });

 export default Authcontext