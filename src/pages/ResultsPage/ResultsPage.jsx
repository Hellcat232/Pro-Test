import css from "./ResultsPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectTitle, selectResults } from "../../redux/test/selectors";
import Diagram from "../../components/Diagram/Diagram";
import { resetResults, resetTest } from "../../redux/test/slice";
import { theoryTest, techTest } from "../../redux/test/operation";

export default function ResultsPage() {
  const title = useSelector(selectTitle);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { result, mainMessage, secondaryMessage } = useSelector(selectResults);
  // console.log(result);

  const totalQuestion = 12;
  let percentages = parseInt(result, 10);

  console.log("Percent", percentages);

  const calcCorrectAnswersPercentages = (percent, totalQuestion) => {
    let correctAnswers = (percent / 100) * totalQuestion;
    if (correctAnswers < 1) {
      return 0;
    } else {
      return Math.ceil(correctAnswers);
    }
  };

  function calcToDiagram(percent, totalQuestion) {
    let correctAnswer = (percent / 100) * totalQuestion;
    let incorrectAnswer = totalQuestion - correctAnswer;

    let correctPercentage = (correctAnswer / totalQuestion) * 100;
    let incorrectPercentage = (incorrectAnswer / totalQuestion) * 100;

    correctPercentage.toFixed(2);
    incorrectPercentage.toFixed(2);

    return {
      correctPercentage,
      incorrectPercentage,
    };
  }

  let { correctPercentage, incorrectPercentage } = calcToDiagram(
    percentages,
    totalQuestion
  );

  const handleReplace = () => {
    if (title === "tech") {
      dispatch(techTest());
      dispatch(resetResults());
      navigate("/test");
    } else if (title === "theory") {
      dispatch(theoryTest());
      dispatch(resetResults());
      navigate("/test");
    }
  };

  return (
    <>
      <div className={css["results-page"]}>
        <h2 className={css["result-title"]}>Results</h2>
        {title === "tech" && (
          <p className={css["theme-title"]}>[QA technical training_]</p>
        )}
        {title === "theory" && (
          <p className={css["theme-title"]}>[Testing theory_]</p>
        )}
        <Diagram correct={correctPercentage} incorrect={incorrectPercentage} />
        <div className={css["show-results"]}>
          <p className={css.correct}>
            Correct answer -{" "}
            {calcCorrectAnswersPercentages(percentages, totalQuestion)}
          </p>
          <p className={css.incorrect}>Total questions - {totalQuestion}</p>
        </div>
        <div className={css["div-cat"]}>
          <img className={css.cat} src="/images/CatWithHeart.png" alt="" />
        </div>
        <div className={css["message-div"]}>
          <p className={css["main-message"]}>{mainMessage}</p>
          <p className={css["secondary-message"]}>{secondaryMessage}</p>
        </div>
        <button className={css["try-again"]} onClick={handleReplace}>
          Try again
        </button>
      </div>
    </>
  );
}
