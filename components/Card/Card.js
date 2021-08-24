import classes from "./Card.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";

// headingText: string;
// detailItems: string[];
// textAbovePrice: string;
// price: string;
// buttonText: string
// variant: 1 | 2 | 3

export default function Card(props) {
  const {
    headingText,
    detailItems,
    textAbovePrice,
    price,
    buttonText,
    variant,
  } = props;

  return (
    <div className={classes.card}>
      <div
        className={clsx(classes["card__side"], classes["card__side--front"])}
      >
        <div
          className={clsx(
            classes["card__picture"],
            classes[`card__picture--${variant}`]
          )}
        >
          &nbsp;
        </div>
        <h4 className={classes["card__heading"]}>
          <span
            className={clsx(
              classes["card__heading-span"],
              classes[`card__heading-span--${variant}`]
            )}
          >
            {headingText}
          </span>
        </h4>

        <div className={classes["card__details"]}>
          <ul>
            {detailItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={clsx(
          classes["card__side"],
          classes["card__side--back"],
          classes[`card__side--back-${variant}`]
        )}
      >
        <div className={classes["card__cta"]}>
          <div className={classes["card__price-box"]}>
            <p className={classes["card__price-only"]}>{textAbovePrice}</p>
            <p className={classes["card__price-value"]}>{price}</p>
          </div>
          <Button
            htmlElement="link"
            text={buttonText}
            variant="white"
            href="#popup"
          />
        </div>
      </div>
    </div>
  );
}
