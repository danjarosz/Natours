import classes from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <div className={classes["navigation"]}>
      <input
        type="checkbox"
        className={classes["navigation__checkbox"]}
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className={classes["navigation__button"]}>
        <span className={classes["navigation__icon"]}>&nbsp;</span>
      </label>

      <div className={classes["navigation__background"]}>&nbsp;</div>

      <nav className={classes["navigation__nav"]}>
        <ul className={classes["navigation__list"]}>
          <li className={classes["navigation__item"]}>
            <a href="#" className={classes["navigation__link"]}>
              <span>01</span> About Natours
            </a>
          </li>
          <li className={classes["navigation__item"]}>
            <a href="#" className={classes["navigation__link"]}>
              <span>02</span> Your benefots
            </a>
          </li>
          <li className={classes["navigation__item"]}>
            <a href="#" className={classes["navigation__link"]}>
              <span>03</span> Popular tours
            </a>
          </li>
          <li className={classes["navigation__item"]}>
            <a href="#" className={classes["navigation__link"]}>
              <span>04</span> Stories
            </a>
          </li>
          <li className={classes["navigation__item"]}>
            <a href="#" className={classes["navigation__link"]}>
              <span>05</span> Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
