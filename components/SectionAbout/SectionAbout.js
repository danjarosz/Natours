import classes from "./SectionAbout.module.scss";
import Button from "../Button/Button";
import Composition from "../Composition/Composition";
import Grid from "../Grid/Grid";
import Typography from "../Typography/Typography";

export default function SectionAbout() {
  return (
    <section className={classes["section-about"]} id="section-about">
      <div className="u-center-text">
        <Typography component="h2" variant="secondary" marginBottom="big">
          Exciting tours for adventours people
        </Typography>
      </div>

      <Grid element="row">
        <Grid element="column" elementNumber={1} numberOfColumns={2}>
          <Typography component="h3" variant="tertiary" marginBottom="small">
            You're going to fall in love with nature
          </Typography>
          <Typography component="p" variant="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit magnam eius nobis quis eaque architecto voluptatem
            obcaecati! Facere mollitia qui excepturi ipsum eaque? Earum error,
            alias perferendis pariatur harum sed?
          </Typography>

          <Typography component="h3" variant="tertiary" marginBottom="small">
            Live adventures like you never have before
          </Typography>
          <Typography component="p" variant="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            expedita delectus quas corrupti, fugit eligendi sequi fuga minus in
            excepturi atque deserunt ex, qui distinctio asperiores sapiente,
            dolores velit dolore!
          </Typography>
          <Button
            htmlElement="link"
            text="Learn more &rarr;"
            type="text"
            href="#"
          />
        </Grid>

        <Grid element="column" elementNumber={1} numberOfColumns={2}>
          <Composition />
        </Grid>
      </Grid>
    </section>
  );
}
