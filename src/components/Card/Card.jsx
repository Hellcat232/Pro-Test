import css from "./Card.module.css";

const Card = () => {
  return (
    <div className={css["card-div"]}>
      <picture>
        <source
          media="min-width:768px"
          srcSet="/images/PhotoCard-mob.png, /images/PhotoCard-desk.png 1x, /images/PhotoCard-tablet.png 1x "
        />
        <img
          className={css.img}
          srcSet="/images/PhotoCard-mob.png 1x, /images/PhotoCard-desk.png 1x, /images/PhotoCard-tablet.png 1x"
          src="/images/PhotoCard-tablet.png"
          alt=""
          loading="lazy"
        />
      </picture>

      <div className={css["text-div"]}>
        <p className={css.name}>Name</p>

        <p className={css.role}>Front-end developer</p>

        <p className={css.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
          optio! Modi, vel! Laudantium, assumenda modi!
        </p>
      </div>
    </div>
  );
};

export default Card;
