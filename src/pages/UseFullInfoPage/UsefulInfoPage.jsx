import css from "./UseFullInfoPage.module.css";

const UseFullInfo = () => {
  return (
    <div className={css["background-image"]}>
      <div className={css.lists}>
        <div>
          <h3 className={css["lit-title"]}>
            Useful
            <br className={css.br} /> literature
          </h3>
          <ul className={css["use-lit"]}>
            <li>1. Testing dot.com Savin.</li>
            <li>
              2. A mental hospital in the hands of
              <br /> patients.
            </li>
            <li>3. Scrum. J. Sutherland.</li>
          </ul>
        </div>

        <div>
          <h3 className={css["res-title"]}>
            Useful
            <br className={css.br} /> resources
          </h3>
          <ul className={css["use-res"]}>
            <li>1. dou.ua</li>
            <li>2. Habr</li>
            <li>3. facebook.com/QA</li>
            <li>4. goit.ua</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseFullInfo;
