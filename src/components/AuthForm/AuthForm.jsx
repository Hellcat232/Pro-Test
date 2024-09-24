import css from "./AuthForm.module.css";
import icons from "../../images/symbol-defs.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, login, loginFromGoogle } from "../../redux/auth/operations";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail("");
    setPassword("");
    navigate("/");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ email, password }));
    setEmail("");
    setPassword("");
    navigate("/");
  };

  const handleGoogle = () => {
    dispatch(loginFromGoogle());
  };

  return (
    <form className={css["auth-form"]}>
      <div className={css.description}>
        <p className={css["p-google"]}>
          You can use your Google Account to authorize:
        </p>

        <button className={css["google-btn"]} onClick={handleGoogle} disabled>
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
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          className={css.inputs}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={css.inputs}
        />
      </div>

      <div className={css["btns-div"]}>
        <button type="submit" onClick={handleLogin} className={css["sign-in"]}>
          Sign In
        </button>
        <button
          type="submit"
          onClick={handleRegister}
          className={css["sign-up"]}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
