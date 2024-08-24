import css from "./Footer.module.css";
import icons from "../../images/symbol-defs.svg";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.copyright}>
        <div className={css.div}>
          <p>
            <span style={{ verticalAlign: "middle" }}>
              <svg width="18" height="18">
                <use href={`${icons}#icon-copyright-24px-1`}></use>
              </svg>
            </span>
            2024 | All Rights Reserved | Developed with
            <span style={{ verticalAlign: "middle" }}>
              <svg width="16" height="16">
                <use href={`${icons}#icon-favorite-heart-button`}></use>
              </svg>
            </span>
            <br className={css.br} /> by GoIT Students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
