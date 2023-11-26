import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailinputref = useRef();
  const passwordinputref = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isloading , setisloading]=useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enetredEmail = emailinputref.current.value;
    const enetredPassword = passwordinputref.current.value;


    setisloading(true)
    if (isLogin) {

    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVdjxsfFD9GI8AS1-icdarMxlh_KQffzA"
      ,{
        method:'POST',
        body: JSON.stringify({
          email:enetredEmail,
          password:enetredPassword,
          returnSecureToken:true
        }),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res=>{
        setisloading(false)
        if(res.ok){

        }else{
          return res.json().then(data =>{
            //shoe  error message
            let errormessage = 'Authentication failed'
            if(data && data.error && data.error.message){
             errormessage = data.error.message
            }
            alert(errormessage);
          });
        }
      });
    }
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailinputref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordinputref}
          />
        </div>
        <div className={classes.actions}>
          {!isloading && <button>{isLogin ? "Login" : "create Account"}</button>}
          {isloading && <p>Sending request ...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
