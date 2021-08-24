import classes from "./Composition.module.scss";
import clsx from "clsx";

export default function Composition() {
  return (
    <div className={classes["composition"]}>
      <img
        srcSet="/images/nat-1.jpg 300w, /images/nat-1-large.jpg 1000w"
        sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
        alt="Photo 1"
        className={clsx(
          classes["composition__photo"],
          classes["composition__photo--p1"]
        )}
        src="/images/nat-1-large.jpg"
      />
      <img
        srcSet="/images/nat-2.jpg 300w, /images/nat-2-large.jpg 1000w"
        sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
        alt="Photo 2"
        className={clsx(
          classes["composition__photo"],
          classes["composition__photo--p2"]
        )}
        src="/images/nat-2-large.jpg"
      />
      <img
        srcSet="/images/nat-3.jpg 300w, /images/nat-3-large.jpg 1000w"
        sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
        alt="Photo 3"
        className={clsx(
          classes["composition__photo"],
          classes["composition__photo--p3"]
        )}
        src="/images/nat-3-large.jpg"
      />
    </div>
  );
}
