import classes from "./Button.module.scss";
import clsx from "clsx";

// htmlElement: link | button;
// text: string;
// variant: undefined | white | green;
// animate: boolean;
// type: undefined | text;
// href: string;

export default function Button(props) {
  const {
    htmlElement = "button",
    text = "",
    variant,
    animate = false,
    type,
    href = "#",
  } = props;

  const classNames =
    type === "text"
      ? clsx(classes["btn-text"])
      : clsx(
          classes.btn,
          variant && variant === "green" && classes["btn--green"],
          variant && variant === "white" && classes["btn--white"],
          animate && classes["btn--animated"]
        );

  if (htmlElement === "button") {
    return <buttton className={classNames}>{text}</buttton>;
  }

  if (htmlElement === "link") {
    return (
      <a href={href} className={classNames}>
        {text}
      </a>
    );
  }
}
