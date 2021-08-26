import classes from "./Header.module.scss";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";

export default function Header() {
  return (
    <header className={classes["header"]}>
      <div className={classes["header__logo-box"]}>
        <img
          src="/images/logo-white.png"
          alt="Natours logo"
          className={classes["header__logo"]}
        />
      </div>
      <div className={classes["header__text-box"]}>
        <Typography component="h1" variant="primary">
          <Typography component="h1" variant="primary" type="main">
            Outdoors
          </Typography>
          <Typography component="h1" variant="primary" type="sub">
            is where life happens
          </Typography>
        </Typography>
        <Button
          htmlElement="link"
          text="Discover our tours"
          variant="white"
          animate={true}
          href="#section-tours"
        />
      </div>
    </header>
  );
}
