import BackgroundVideo from "../components/BackgroundVideo/BackgroundVideo";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Composition from "../components/Composition/Composition";
import FeatureBox from "../components/FeatureBox/FeatureBox";
import Typography from "../components/Typography/Typography";
import Grid from "../components/Grid/Grid";
import Form from "../components/Form/Form";
import Popup from "../components/Popup/Popup";
import Story from "../components/Story/Story";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>01</span> About Natours
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>02</span> Your benefots
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>03</span> Popular tours
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>04</span> Stories
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>05</span> Book now
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Header />
      <main>
        <section className="section-about" id="section-about">
          <div className="u-center-text">
            <Typography component="h2" variant="secondary" marginBottom="big">
              Exciting tours for adventours people
            </Typography>
          </div>

          <Grid element="row">
            <Grid element="column" elementNumber={1} numberOfColumns={2}>
              <Typography
                component="h3"
                variant="tertiary"
                marginBottom="small"
              >
                You're going to fall in love with nature
              </Typography>
              <Typography component="p" variant="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit magnam eius nobis quis eaque architecto voluptatem
                obcaecati! Facere mollitia qui excepturi ipsum eaque? Earum
                error, alias perferendis pariatur harum sed?
              </Typography>

              <Typography
                component="h3"
                variant="tertiary"
                marginBottom="small"
              >
                Live adventures like you never have before
              </Typography>
              <Typography component="p" variant="paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda expedita delectus quas corrupti, fugit eligendi sequi
                fuga minus in excepturi atque deserunt ex, qui distinctio
                asperiores sapiente, dolores velit dolore!
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
        <section className="section-features" id="section-features">
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

        <section className="section-tours" id="section-tours">
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
        <section className="section-stories" id="section-stories">
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
        <section className="section-book" id="section-book">
          <Grid element="row">
            <div className="book">
              <div className="book__form">
                <Form />
              </div>
            </div>
          </Grid>
        </section>
      </main>
      <Footer />
      <Popup />
    </>
  );
}
