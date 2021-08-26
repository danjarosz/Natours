import classes from "./SectionTours.module.scss";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Grid from "../Grid/Grid";
import Typography from "../Typography/Typography";

export default function SectionTours() {
  return (
    <section className={classes["section-tours"]} id="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <Typography component="h2" variant="secondary">
          Most popular tours
        </Typography>
      </div>

      <Grid element="row">
        <Grid element="column" elementNumber={1} numberOfColumns={3}>
          <Card
            headingText="the sea explorer"
            detailItems={[
              "3 day tour",
              "Up to 30 people",
              "2 tour guides",
              "Sleep in cosy hotels",
              "Difficulty: easy",
            ]}
            textAbovePrice="Only"
            price="$297"
            buttonText="book now!"
            variant={1}
          />
        </Grid>
        <Grid element="column" elementNumber={1} numberOfColumns={3}>
          <Card
            headingText="the forest hiker"
            detailItems={[
              "7 day tour",
              "Up to 40 people",
              "6 tour guides",
              "Sleep in provided tents",
              "Difficulty: medium",
            ]}
            textAbovePrice="Only"
            price="$497"
            buttonText="book now!"
            variant={2}
          />
        </Grid>
        <Grid element="column" elementNumber={1} numberOfColumns={3}>
          <Card
            headingText="the snow adventurer"
            detailItems={[
              "5 day tour",
              "Up to 15 people",
              "3 tour guides",
              "Sleep in provided tents",
              "Difficulty: hard",
            ]}
            textAbovePrice="Only"
            price="$897"
            buttonText="book now!"
            variant={3}
          />
        </Grid>
      </Grid>

      <div className="u-center-text u-margin-top-huge">
        <Button
          htmlElement="link"
          text="Discover all tours"
          variant="green"
          href="#"
        />
      </div>
    </section>
  );
}
