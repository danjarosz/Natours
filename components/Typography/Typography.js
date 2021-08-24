import classes from "./Typography.module.scss";
import utilityClasses from "../../styles/base/utilities.module.scss";
import { useMemo } from "react";
import clsx from "clsx";

// component: "h1" | "h2" | "h3" | "p" | "span"
// variant: "primary" | "secondary" | "tertiary" | "paragraph"
// type: "main" | "sub"
// marginBottom: "big" | "medium" | "small"
// marginTop: "huge" | "big"

export default function Typography(props) {
  const { component, variant, type, marginBottom, marginTop, children } = props;

  const variantClass = useMemo(() => {
    switch (variant) {
      case "primary":
        if (type === "main") {
          return classes["heading-primary--main"];
        } else if (type === "sub") {
          return classes["heading-primary--sub"];
        } else {
          return classes["heading-primary"];
        }
      case "secondary":
        return classes["heading-secondary"];
      case "tertiary":
        return classes["heading-tertiary"];
      case "paragraph":
        return classes["paragraph"];
      default:
        return null;
    }
  }, [variant, type]);

  const marginBottomClass = useMemo(() => {
    switch (marginBottom) {
      case "big":
        return utilityClasses["u-margin-bottom-big"];
      case "medium":
        return utilityClasses["u-margin-bottom-medium"];
      case "small":
        return utilityClasses["u-margin-bottom-small"];
      default:
        return null;
    }
  }, [marginBottom]);

  const marginTopClass = useMemo(() => {
    switch (marginTop) {
      case "huge":
        return utilityClasses["u-margin-top-huge"];
      case "big":
        return utilityClasses["u-margin-top-big"];
      default:
        return null;
    }
  }, [marginTop]);

  const typography = useMemo(() => {
    switch (component) {
      case "h1":
        return (
          <h1 className={clsx(variantClass, marginBottomClass, marginTopClass)}>
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2 className={clsx(variantClass, marginBottomClass, marginTopClass)}>
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3 className={clsx(variantClass, marginBottomClass, marginTopClass)}>
            {children}
          </h3>
        );
      case "p":
        return (
          <p className={clsx(variantClass, marginBottomClass, marginTopClass)}>
            {children}
          </p>
        );
      case "span":
        return (
          <span
            className={clsx(variantClass, marginBottomClass, marginTopClass)}
          >
            {children}
          </span>
        );
      default:
        return (
          <p className={clsx(variantClass, marginBottomClass, marginTopClass)}>
            {children}
          </p>
        );
    }
  }, [component, marginBottomClass, marginTopClass]);

  return typography;
}
