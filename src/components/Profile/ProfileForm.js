import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import Authcontext from "../../Store/Authcontext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProfileForm = () => {
  const authctx = useContext(Authcontext);
  const paswordinputref = useRef();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    const enetredpassword = paswordinputref.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAVdjxsfFD9GI8AS1-icdarMxlh_KQffzA",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authctx.token,
          password: enetredpassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      //assumption always success
      history.replace('/')

    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={paswordinputref}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
