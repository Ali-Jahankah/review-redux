import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../reducers/auth";

const Auth = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(authActions.loginReducer());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              loginHandler();
            }}
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
