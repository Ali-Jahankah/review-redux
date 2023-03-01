import { useSelector, useDispatch } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../reducers/auth";

const Header = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(authActions.logoutReducer());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {authState.isAuth && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  logOutHandler();
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
