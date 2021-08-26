import classes from "./Story.module.scss";
import Typography from "../Typography/Typography";

// imageData: {
//    src: string;
//    alt: string;
// }
// userName: string;
// title: string;
// text: string;

export default function Story(props) {
  const { imageData, userName, title, text } = props;

  return (
    <div className={classes["story"]}>
      <figure className={classes["story__shape"]}>
        <img
          src={imageData.src}
          alt={imageData.alt}
          className={classes["story__img"]}
        />
        <figcaption className={classes["story__caption"]}>
          {userName}
        </figcaption>
      </figure>
      <div className={classes["story__text"]}>
        <Typography component="h3" variant="tertiary" marginBottom="small">
          {title}
        </Typography>
        <Typography component="p">{text}</Typography>
      </div>
    </div>
  );
}
