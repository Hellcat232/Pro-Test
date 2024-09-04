import css from "./TestBox.module.css";
import { useSelector } from "react-redux";
import { selectTechTest } from "../../redux/test/selectors";

const TestBox = ({ question, questionId, answers, index }) => {
  const tech = useSelector(selectTechTest);

  return (
    <>
      <div className={css["test-box"]}>
        <p className={css["question-num"]}>
          Question <span className={css["one-of"]}>{index + 1}</span>/12
        </p>
        <p className={css["question-name"]}>
          {typeof question === "string" ? question : JSON.stringify(question)}
        </p>

        <ul className={css.ul}>
          {answers.map((answer, idx) => (
            <li key={idx} className={css.li}>
              <input type="radio" name={`form-${questionId}`} value={answer} />
              <label htmlFor="" className={css.label}>
                {typeof answer === "string" ? answer : JSON.stringify(answer)}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TestBox;
