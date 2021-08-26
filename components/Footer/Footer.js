import classes from "./Footer.module.scss";
import Grid from "../Grid/Grid";

export default function Footer() {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer__logo-box"]}>
        <img
          src="/images/logo-green-2x.png"
          alt="Full logo"
          className={classes["footer__logo"]}
        />
      </div>

      <Grid element="row">
        <Grid element="column" elementNumber={1} numberOfColumns={2}>
          <div className={classes["footer__navigation"]}>
            <ul className={classes["footer__list"]}>
              <li className={classes["footer__item"]}>
                <a href="#" className={classes["footer__link"]}>
                  Company
                </a>
              </li>
              <li className={classes["footer__item"]}>
                <a href="#" className={classes["footer__link"]}>
                  Contact us
                </a>
              </li>
              <li className={classes["footer__item"]}>
                <a href="#" className={classes["footer__link"]}>
                  Carrers
                </a>
              </li>
              <li className={classes["footer__item"]}>
                <a href="#" className={classes["footer__link"]}>
                  Privacy policy
                </a>
              </li>
              <li className={classes["footer__item"]}>
                <a href="#" className={classes["footer__link"]}>
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid element="column" elementNumber={1} numberOfColumns={2}>
          <p className={classes["footer__copyright"]}>
            Built by{" "}
            <a href="#" className={classes["footer__link"]}>
              Jonas Schmedtman
            </a>{" "}
            for his online course{" "}
            <a href="#" className={classes["footer__link"]}>
              Advanced CSS and Sass
            </a>
            . Copyright &copy; by Jonas Schmedtmann. Converted by Daniel Jarosz
            to NextJS app. You are 100% allowed to use this webside for both
            personal and commercial use, but not to claim it as your own design.
            A credit to the original author, Jonas Schmedtmann, is of course
            highly appreciated!
          </p>
        </Grid>
      </Grid>
    </footer>
  );
}
