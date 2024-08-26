import css from "./Navigation.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { RxHamburgerMenu } from "react-icons/rx";
import icon from "../../images/symbol-defs.svg";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const isLogged = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useDispatch();

  console.log(userName);

  const handleLogout = () => {
    dispatch(logout());

    navigate("/");
  };

  return (
    <header className={css.header}>
      <Link to="/">
        <svg className={css.logo}>
          <use href={`${icon}#icon-logo-1`}></use>
        </svg>
      </Link>

      <nav className={css.nav}>
        <ul className={css["nav-list"]}>
          {isLogged && (
            <li className={css["home-material"]}>
              <Link to="/">Home</Link>
            </li>
          )}
          {isLogged && (
            <li className={css["home-material"]}>
              <Link to="/usefull-info">Material</Link>
            </li>
          )}

          <li className={css["contacts"]}>
            <Link to="/contacts">Contacts</Link>
          </li>

          <ul className={css["nav-right-side"]}>
            {isLogged && (
              <li className={css.elipse}>
                <span style={{ verticalAlign: "middle" }}>n</span>
              </li>
            )}

            {isLogged && (
              <li className={css.name}>
                <p>{userName.email}</p>
              </li>
            )}
            {isLogged && (
              <li>
                <svg width="2" height="68" className={css.line}>
                  <use href={`${icon}#icon-Rectangle-3`}></use>
                </svg>
              </li>
            )}
            <li className={css["burger-btn"]}>
              <RxHamburgerMenu />
            </li>
            {isLogged && (
              <li className={css["sign-out"]}>
                <button
                  onClick={handleLogout}
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  <svg width="16" height="16">
                    <use href={`${icon}#icon-sign-out`}></use>
                  </svg>
                </button>
              </li>
            )}
          </ul>
        </ul>

        <ul>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
