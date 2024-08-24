import css from "./Navigation.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import icon from "../../images/symbol-defs.svg";

const Navigation = () => {
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

      <div>
        <p className={css.contacts}>Contacts</p>
        <button className={css["burger-btn"]}>
          <RxHamburgerMenu />
        </button>
      </div>
    </header>
  );
};

export default Navigation;
