import classes from "./Popup.module.scss";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

export default function Popup() {
  return (
    <div className={classes["popup"]} id="popup">
      <div className={classes["popup__content"]}>
        <div className={classes["popup__left"]}>
          <img
            src="/images/nat-8.jpg"
            alt="tour photo"
            className={classes["popup__img"]}
          />
          <img
            src="/images/nat-9.jpg"
            alt="tour photo"
            className={classes["popup__img"]}
          />
        </div>
        <div className={classes["popup__right"]}>
          <a href="#section-tours" className={classes["popup__close"]}>
            &times;
          </a>

          <Typography component="h2" variant="secondary" marginBottom="small">
            Start booking now
          </Typography>
          <Typography component="h3" variant="tertiary" marginBottom="small">
            Important &ndash; Please read these terms before booking
          </Typography>
          <p className={classes["popup__text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa
            laborum provident fugit molestias amet, pariatur neque fugiat minima
            autem mollitia, veritatis nemo repudiandae possimus veniam ullam
            corporis dignissimos? Quidem vero totam, ex voluptatibus minima
            numquam repellat ratione assumenda nemo, hic rerum optio tempora
            consectetur molestiae veritatis repudiandae est nesciunt nulla
            nihil, ullam harum. Nulla cumque distinctio ratione qui accusantium
            vero consequuntur quisquam pariatur voluptas laudantium ex iste
            voluptates, facilis quis maxime quasi dolore beatae aspernatur
            molestiae repudiandae eos totam dignissimos. Dolorum magni,
            quibusdam ipsam animi reiciendis, esse repellendus nostrum laborum
            architecto, ut necessitatibus impedit natus est aspernatur deserunt
            soluta!
          </p>
          <Button htmlElement="link" text="Book now" variant="green" href="#" />
        </div>
      </div>
    </div>
  );
}
