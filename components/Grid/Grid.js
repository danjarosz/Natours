import { useMemo } from "react";
import classes from "./Grid.module.scss";

// element: "row" | "column"
// elementNumber: number;
// numberOfColumns: number;

export default function Grid(props) {
  const { children, element, elementNumber, numberOfColumns } = props;

  if (!element) {
    return;
  }

  const component = useMemo(() => {
    switch (element) {
      case "row":
        return <div className={classes["row"]}>{children}</div>;
      case "column":
        return (
          <div
            className={classes[`col-${elementNumber}-of-${numberOfColumns}`]}
          >
            {children}
          </div>
        );
      default:
        return null;
    }
  }, [element]);

  return component;
}
