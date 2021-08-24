import { useMemo } from "react";
import clsx from "clsx";
import classes from "./FeatureBox.module.scss";
import Typography from "../Typography/Typography";

// icon: "globe" | "compass" | "map" | "heartbeat"
// headingText: string;
// text: string;

export default function FeatureBox(props) {
  const { icon, headingText, text } = props;

  const iconClass = useMemo(() => {
    switch (icon) {
      case "globe":
        return " fas fa-globe";
      case "compass":
        return "far fa-compass";
      case "map":
        return "far fa-map";
      case "heartbeat":
        return "fas fa-heartbeat";
      default:
        return null;
    }
  }, [icon]);

  return (
    <div className={classes["feature-box"]}>
      {iconClass ? (
        <i className={clsx(classes["feature-box__icon"], iconClass)}></i>
      ) : null}
      <Typography component="h3" variant="tertiary" marginBottom="small">
        {headingText}
      </Typography>
      <p className={classes["feature-box__text"]}>{text}</p>
    </div>
  );
}
