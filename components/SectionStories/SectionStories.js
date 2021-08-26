import classes from "./SectionStories.module.scss";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import Button from "../Button/Button";
import Grid from "../Grid/Grid";
import Story from "../Story/Story";
import Typography from "../Typography/Typography";

export default function SectionStories() {
  return (
    <section className={classes["section-stories"]} id="section-stories">
      <BackgroundVideo />
      <div className="u-center-text u-margin-bottom-big">
        <Typography component="h2" variant="secondary">
          We make people genuiely happy
        </Typography>
      </div>

      <Grid element="row">
        <Story
          imageData={{
            src: "/images/nat-8.jpg",
            alt: "person on a tour",
          }}
          userName="Marry Smith"
          title="I had the best week ever with my family"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
        nulla cumque molestiae fugit excepturi quod magni inventore vel
        facilis nobis, error tenetur incidunt odit similique dolor ratione
        officia laudantium sed aspernatur? Cum aliquid mollitia quia nisi a
        tempore dicta? Eius sapiente officia quod totam provident tenetur
        natus explicabo laudantium debitis."
        />
      </Grid>

      <Grid element="row">
        <Story
          imageData={{
            src: "/images/nat-9.jpg",
            alt: "person on a tour",
          }}
          userName="Jack Willson"
          title="WOW! My life is completely different now"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Iusto corrupti nesciunt expedita accusamus quo quam! Sint
        officia asperiores ratione recusandae alias perspiciatis eaque
        unde libero accusamus, nemo, odio fuga sit et. Eos blanditiis
        quasi labore est quo? Minima incidunt corrupti aliquid saepe,
        et maiores soluta, repellendus nam tempora laboriosam
        voluptate. Maiores eaque suscipit, doloremque aspernatur modi
        ad adipisci atque saepe!"
        />
      </Grid>

      <div className="u-center-text u-margin-top-huge">
        <Button
          htmlElement="link"
          text="Read all stories &rarr;"
          type="text"
          href="#"
        />
      </div>
    </section>
  );
}
