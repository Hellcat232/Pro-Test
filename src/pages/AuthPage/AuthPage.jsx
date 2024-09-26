import css from "./AuthPage.module.css";
import AuthForm from "../../components/AuthForm/AuthForm";

export default function AuthPage() {
  return (
    <>
      <div className={css["title-div"]}>
        <h2 className={css["auth-title"]}>Pro Test</h2>

        <p className={css.description}>
          <span className={css["description-span"]}>[</span> We will help you
          find weak points <br className={css.br} /> in knowledge so that you
          can strengthen it. We will show you what is relevant to know for a{" "}
          <span className={css["description-span"]}>QA Engineer</span> and will
          try to make the learning process more diverse_{" "}
          <span className={css["description-span"]}>]</span>
        </p>
      </div>
      <AuthForm />
    </>
  );
}
