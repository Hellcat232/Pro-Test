import css from "./TestPage.module.css";
import toast from "react-hot-toast";
import TestBox from "../../components/TestBox/TestBox";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { techResults, theoryResults } from "../../redux/test/operation";
import { useNavigate } from "react-router-dom";
import { selectTechTest, selectTitle } from "../../redux/test/selectors";
import { resetTest } from "../../redux/test/slice";
// import undateButtonText from "../../helpers/resizeButton";

export default function TestPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tech = useSelector(selectTechTest);
  const title = useSelector(selectTitle);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswer] = useState({});
  const [prevBtnText, setPrevBtnText] = useState("prev");
  const [nextBtnText, setNextBtnText] = useState("next");

  let totalAnswers = Object.keys(answers).length;

  if (totalAnswers === 12) {
    toast("Click Finish test", {
      duration: 4000,
      position: "top-center",
    });
  }

  //=========Change button text after resize
  useEffect(() => {
    const updateButtonText = () => {
      if (window.innerWidth > 320) {
        setPrevBtnText("previous question");
        setNextBtnText("next question");
      } else {
        setPrevBtnText("prev");
        setNextBtnText("next");
      }
    };

    updateButtonText();

    window.addEventListener("resize", updateButtonText);

    return () => {
      window.removeEventListener("resize", updateButtonText);
    };
  }, []);
  //==========================================

  const handleLoadNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < tech.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleLoadPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleChange = (questionId, answer) => {
    setAnswer((prev) => ({
      ...prev,
      [questionId]: answer, // Сохраняем ответ для каждого questionId
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const payload = {
      answers: Object.keys(answers).map((questionId) => ({
        questionId: Number(questionId),
        answer: answers[questionId],
      })),
    };

    if (payload.answers.length < 12) {
      dispatch(resetTest());
      return navigate("/");
    }

    const techResult = payload;
    const thoeryResult = payload;

    dispatch(techResults(techResult));

    dispatch(theoryResults(thoeryResult));

    navigate("/results");
  };

  const isTechLoaded = tech && tech.length > 0 && tech[currentIndex];

  return (
    <>
      <form className={css.form} onSubmit={handleSubmitForm}>
        <div className={css["title-and-finish"]}>
          {title === "theory" && (
            <b className={css.title}>
              [ Testing <br /> theory_]
            </b>
          )}
          {title === "tech" && (
            <b className={css.title}>
              [ QA technical
              <br /> training_]
            </b>
          )}
          <button type="submit" className={css["finish-btn"]}>
            Finish test
          </button>
        </div>

        {isTechLoaded ? (
          <TestBox
            handleChange={handleChange}
            question={tech[currentIndex].question}
            questionId={tech[currentIndex].questionId}
            answers={tech[currentIndex].answers}
            index={currentIndex}
            selectedAnswer={answers[tech[currentIndex].questionId] || ""}
          />
        ) : (
          <p>Loading...</p>
        )}

        <div className={css.btns}>
          <button
            className={css["prev-btn"]}
            type="button"
            onClick={handleLoadPrev}
            disabled={currentIndex === 0}
          >
            {prevBtnText}
          </button>
          <button
            className={css["next-btn"]}
            type="button"
            onClick={handleLoadNext}
            disabled={currentIndex === tech.length - 1}
          >
            {nextBtnText}
          </button>
        </div>
      </form>
    </>
  );
}
