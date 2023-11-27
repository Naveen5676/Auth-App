import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import Authcontext from "../../Store/Authcontext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const MainNavigation = () => {
  const authctx = useContext(Authcontext);

  const isLoggedIn = authctx.isLoggedIn;

  const history = useHistory();
  const logoutHandler = () => {
    authctx.logout();
    history.replace("/auth");
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
