import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import icon from "../../images/symbol-defs.svg";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <nav>
        <svg className={css.logo}>
          <use href={`${icon}#icon-logo-1`}></use>
        </svg>
      </nav>
      <div>
        <svg className={css.line}>
          <use href={`${icon}#icon-Rectangle-3`}></use>
        </svg>
      </div>

      <nav>
        <ul>
          {isLogged && (
            <li>
              <p>Home</p>
              <p>Material</p>
            </li>
          )}
          <li>
            <p className={css.contacts}>Contacts</p>
            <button className={css["burger-btn"]}>
              <RxHamburgerMenu />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
