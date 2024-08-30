import css from "./TestBox.module.css";

const TestBox = () => {
  return (
    <div className={css["test-box"]}>
      <p className={css["question-num"]}>
        Question <span className={css["one-of"]}>1</span>/12
      </p>
      <p className={css["question-name"]}>Some question name</p>
    </div>
  );
};

export default TestBox;
