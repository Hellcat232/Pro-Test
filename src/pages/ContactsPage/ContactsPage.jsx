import css from "./ContactsPage.module.css";
import Card from "../../components/Card/Card";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { user } from "../../redux/user/operations";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(user());
  });

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
}
