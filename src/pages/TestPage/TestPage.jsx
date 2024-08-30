import css from "./TestPage.module.css";
import TestBox from "../../components/TestBox/TestBox";

const TestPage = () => {
  return (
    <>
      <form className={css.form}>
        <div className={css["title-and-finish"]}>
          <b className={css.title}>
            [ Testing <br /> theory_]
          </b>
          <button className={css["finish-btn"]}>Finish test</button>
        </div>
        <TestBox />
      </form>
    </>
  );
};

export default TestPage;
