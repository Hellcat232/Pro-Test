import css from "./TestPage.module.css";
import TestBox from "../../components/TestBox/TestBox";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { techResults, theoryResults } from "../../redux/test/operation";
import { useNavigate } from "react-router-dom";
import { selectTechTest, selectTitle } from "../../redux/test/selectors";

const TestPage = () => {
  const navigate = useNavigate();
  const tech = useSelector(selectTechTest);
  const title = useSelector(selectTitle);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLoadNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < tech.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleLoadPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleSubmitForm = () => {
    navigate("/");
  };

  const isTechLoaded = tech && tech.length > 0 && tech[currentIndex];

  return (
    <>
      <form className={css.form}>
        <div className={css["title-and-finish"]}>
          {title === "theory" && (
            <b className={css.title}>
              [ Testing <br /> theory_]
            </b>
          )}
          {title === "tech" && (
            <b className={css.title}>
              [ QA technical
              <br /> training]
            </b>
          )}
          <button
            type="submit"
            onSubmit={handleSubmitForm}
            className={css["finish-btn"]}
          >
            Finish test
          </button>
        </div>

        {isTechLoaded ? (
          <TestBox
            question={tech[currentIndex].question}
            questionId={tech[currentIndex].questionId}
            answers={tech[currentIndex].answers}
            index={currentIndex}
          />
        ) : (
          <p>Loading...</p>
        )}

        <button
          type="button"
          onClick={handleLoadPrev}
          disabled={currentIndex === 0}
        >
          prev
        </button>
        <button
          type="button"
          onClick={handleLoadNext}
          disabled={currentIndex === tech.length - 1}
        >
          next
        </button>
      </form>
    </>
  );
};

export default TestPage;
