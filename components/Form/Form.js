import classes from "./Form.module.scss";
import clsx from "clsx";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

export default function Form() {
  return (
    <form className={classes["form"]}>
      <div className="u-margin-bottom-medium">
        <Typography component="h2" variant="secondary">
          Start booking now
        </Typography>
      </div>

      <div className={classes["form__group"]}>
        <input
          type="text"
          className={classes["form__input"]}
          placeholder="Full Name"
          id="name"
          required
        />
        <label htmlFor="name" className={classes["form__label"]}>
          Full name
        </label>
      </div>

      <div className={classes["form__group"]}>
        <input
          type="email"
          className={classes["form__input"]}
          placeholder="Email address"
          id="email"
          required
        />
        <label htmlFor="email" className={classes["form__label"]}>
          Email address
        </label>
      </div>

      <div className={classes["form_group"]}>
        <div className={classes["form__radio-group"]}>
          <input
            type="radio"
            className={classes["form__radio-input"]}
            id="small"
            name="size"
          />
          <label htmlFor="small" className={classes["form__radio-label"]}>
            <span className={classes["form__radio-button"]}></span>
            Small group
          </label>
        </div>
        <div
          className={clsx(
            classes["form__radio-group"],
            " u-margin-bottom-medium"
          )}
        >
          <input
            type="radio"
            className={classes["form__radio-input"]}
            id="large"
            name="size"
          />
          <label htmlFor="large" className={classes["form__radio-label"]}>
            <span className={classes["form__radio-button"]}></span>
            Large group
          </label>
        </div>
      </div>

      <div className={classes["form_group"]}>
        <Button
          htmlElement="link"
          text="Next step &rarr;"
          variant="green"
          href="#"
        />
      </div>
    </form>
  );
}
