import css from "./AuthForm.module.css";
import icons from "../../images/symbol-defs.svg";

const AuthForm = () => {
  return (
    <form className={css["auth-form"]}>
      <div className={css.description}>
        <p className={css["p-google"]}>
          You can use your Google Account to authorize:
        </p>

        <button className={css["google-btn"]} disabled>
          <svg width="18" height="18">
            <use href={`${icons}#icon-google-symbol-1`}></use>
          </svg>
          Google
        </button>

        <p className={css["p-login-register"]}>
          Or login to our app using e-mail and password:
        </p>
      </div>

      <div className={css["inputs-div"]}>
        <input type="email" placeholder="E-mail" className={css.inputs} />
        <input type="password" placeholder="Password" className={css.inputs} />
      </div>

      <div className={css["btns-div"]}>
        <button type="submit" className={css["sign-in"]}>
          Sign In
        </button>
        <button type="submit" className={css["sign-up"]}>
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
