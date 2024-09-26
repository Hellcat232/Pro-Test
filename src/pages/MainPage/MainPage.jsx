import css from "./MainPage.module.css";
import icon from "../../images/symbol-defs.svg";
import { user } from "../../redux/user/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { techTest, theoryTest } from "../../redux/test/operation";

export default function MainPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenTechTest = () => {
    dispatch(techTest());
    navigate("/test");
  };

  const handleOpenTheoryTest = () => {
    dispatch(theoryTest());
    navigate("/test");
  };

  useEffect(() => {
    dispatch(user());
  }, [dispatch]);

  return (
    <div className={css["main-page"]}>
      <p className={css["main-text"]}>
        “Regression testing. What is it?
        <br /> If the system compiles, that's good, if it boots, that's
        <br className={css["br-tablet"]} /> great!”
      </p>

      <svg className={css.line}>
        <use href={`${icon}#icon-Vector-3`}></use>
      </svg>

      <h6 className={css["linus-torvalds"]}>Linus Torvalds</h6>

      <p className={css.hacker}>Linux kernel creator, hacker, 1969</p>

      <ul className={css.list}>
        <li>
          <button className={css["training-btn"]} onClick={handleOpenTechTest}>
            QA technical
            <br /> training
          </button>
        </li>
        <li>
          <button className={css["theory-btn"]} onClick={handleOpenTheoryTest}>
            Testing
            <br /> theory
          </button>
        </li>
      </ul>
    </div>
  );
}
