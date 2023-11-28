import React, { useState } from "react";
import Authcontext from "./Authcontext";

const Authprovider = (props) => {
  const initialToken = localStorage.getItem("idToken");
  const [token, setToken] = useState(initialToken);

  const userIsLogedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("idToken", token);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("idToken");
  };
  setTimeout(() => {
    localStorage.removeItem("idToken");
  }, 5000);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLogedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <Authcontext.Provider value={contextValue}>
      {props.children}
    </Authcontext.Provider>
  );
};

export default Authprovider;
