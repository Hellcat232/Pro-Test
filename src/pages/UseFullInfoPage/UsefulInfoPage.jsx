import css from "./UseFullInfoPage.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { user } from "../../redux/user/operations";

export default function UseFullInfo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(user());
  });

  return (
    <div className={css["background-image"]}>
      <div className={css.lists}>
        <div>
          <h3 className={css["lit-title"]}>
            Useful
            <br className={css.br} /> literature
          </h3>
          <ul className={css["use-lit"]}>
            <li>
              <p className={css.text}>1. Testing dot.com Savin.</p>
            </li>
            <li>
              <p className={css.text}>
                2. A mental hospital in the hands of
                <br /> patients.
              </p>
            </li>
            <li>
              <p className={css.text}>3. Scrum. J. Sutherland.</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={css["res-title"]}>
            Useful
            <br className={css.br} /> resources
          </h3>
          <ul className={css["use-res"]}>
            <li>
              <p className={css.text}>1. dou.ua</p>
            </li>
            <li>
              <p className={css.text}>2. Habr</p>
            </li>
            <li>
              <p className={css.text}>3. facebook.com/QA</p>
            </li>
            <li>
              <p className={css.text}>4. goit.ua</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
