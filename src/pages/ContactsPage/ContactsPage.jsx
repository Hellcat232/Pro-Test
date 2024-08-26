import css from "./ContactsPage.module.css";
import Card from "../../components/Card/Card";

const ContactsPage = () => {
  return (
    <div>
      <h3 className={css.title}>Our team</h3>
      <div className={css["contacts-page"]}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ContactsPage;
