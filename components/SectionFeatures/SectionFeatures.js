import classes from "./SectionFeatures.module.scss";
import Grid from "../Grid/Grid";
import FeatureBox from "../FeatureBox/FeatureBox";

export default function SectionFeatures() {
  return (
    <section className={classes["section-features"]} id="section-features">
      <Grid element="row">
        <Grid element="column" elementNumber={1} numberOfColumns={4}>
          <FeatureBox
            icon="globe"
            headingText="Explore the world"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  eaque praesentium quibusdam vero consequatur alias incidunt."
          />
        </Grid>

        <Grid element="column" elementNumber={1} numberOfColumns={4}>
          <FeatureBox
            icon="compass"
            headingText=" Meet nature"
            text="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  eaque praesentium quibusdam vero consequatur alias incidunt."
          />
        </Grid>

        <Grid element="column" elementNumber={1} numberOfColumns={4}>
          <FeatureBox
            icon="map"
            headingText="Find your way"
            text="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  eaque praesentium quibusdam vero consequatur alias incidunt."
          />
        </Grid>

        <Grid element="column" elementNumber={1} numberOfColumns={4}>
          <FeatureBox
            icon="heartbeat"
            headingText="Live a healthier life"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  eaque praesentium quibusdam vero consequatur alias incidunt."
          />
        </Grid>
      </Grid>
    </section>
  );
}
