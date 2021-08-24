import BackgroundVideo from "../components/BackgroundVideo/BackgroundVideo";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Composition from "../components/Composition/Composition";

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
      <header className="header">
        <div className="header__logo-box">
          <img
            src="/images/logo-white.png"
            alt="Natours logo"
            className="header__logo"
          />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">is where life happens</span>
          </h1>
          <Button
            htmlElement="link"
            text="Discover our tours"
            variant="white"
            animate={true}
            href="#section-tours"
          />
        </div>
      </header>
      <main>
        <section className="section-about" id="section-about">
          <div className="u-center-text">
            <h2 className="heading-secondary u-margin-bottom-big">
              Exciting tours for adventours people
            </h2>
          </div>

          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                You're going to fall in love with nature
              </h3>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit magnam eius nobis quis eaque architecto voluptatem
                obcaecati! Facere mollitia qui excepturi ipsum eaque? Earum
                error, alias perferendis pariatur harum sed?
              </p>

              <h3 className="heading-tertiary u-margin-bottom-small">
                Live adventures like you never have before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda expedita delectus quas corrupti, fugit eligendi sequi
                fuga minus in excepturi atque deserunt ex, qui distinctio
                asperiores sapiente, dolores velit dolore!
              </p>
              <Button
                htmlElement="link"
                text="Learn more &rarr;"
                type="text"
                href="#"
              />
            </div>
            <div className="col-1-of-2">
              <Composition />
            </div>
          </div>
        </section>
        <section className="section-features" id="section-features">
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon fas fa-globe"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Explore the world
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  eaque praesentium quibusdam vero consequatur alias incidunt.
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon far fa-compass"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Meet nature
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  eaque praesentium quibusdam vero consequatur alias incidunt.
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon far fa-map"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Find your way
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  eaque praesentium quibusdam vero consequatur alias incidunt.
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon fas fa-heartbeat"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Live a healthier life
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  eaque praesentium quibusdam vero consequatur alias incidunt.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-tours" id="section-tours">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary ">Most popular tours</h2>
          </div>

          <div className="row">
            <div className="col-1-of-3">
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
            </div>
            <div className="col-1-of-3">
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
            </div>
            <div className="col-1-of-3">
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
            </div>
          </div>

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
            <h2 className="heading-secondary ">
              We make people genuiely happy
            </h2>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="/images/nat-8.jpg"
                  alt="person on a tour"
                  className="story__img"
                />
                <figcaption className="story__caption">Marry Smith</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="headeing-tertiary u-margin-bottom-small">
                  I had the best week ever with my family
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas nulla cumque molestiae fugit excepturi quod magni
                  inventore vel facilis nobis, error tenetur incidunt odit
                  similique dolor ratione officia laudantium sed aspernatur? Cum
                  aliquid mollitia quia nisi a tempore dicta? Eius sapiente
                  officia quod totam provident tenetur natus explicabo
                  laudantium debitis.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="/images/nat-9.jpg"
                  alt="person on a tour"
                  className="story__img"
                />
                <figcaption className="story__caption">Jack Willson</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="headeing-tertiary u-margin-bottom-small">
                  WOW! My life is completely different now
                </h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iusto corrupti nesciunt expedita accusamus quo quam! Sint
                  officia asperiores ratione recusandae alias perspiciatis eaque
                  unde libero accusamus, nemo, odio fuga sit et. Eos blanditiis
                  quasi labore est quo? Minima incidunt corrupti aliquid saepe,
                  et maiores soluta, repellendus nam tempora laboriosam
                  voluptate. Maiores eaque suscipit, doloremque aspernatur modi
                  ad adipisci atque saepe!
                </p>
              </div>
            </div>
          </div>

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
          <div className="row">
            <div className="book">
              <div className="book__form">
                <form action="#" className="form">
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary ">Start booking now</h2>
                  </div>

                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Full Name"
                      id="name"
                      required
                    />
                    <label htmlFor="name" className="form__label">
                      Full name
                    </label>
                  </div>

                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Email address"
                      id="email"
                      required
                    />
                    <label htmlFor="email" className="form__label">
                      Email address
                    </label>
                  </div>

                  <div className="form_group">
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="small"
                        name="size"
                      />
                      <label htmlFor="small" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Small group
                      </label>
                    </div>
                    <div className="form__radio-group u-margin-bottom-medium">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="large"
                        name="size"
                      />
                      <label htmlFor="large" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Large group
                      </label>
                    </div>
                  </div>

                  <div className="form_group">
                    <Button
                      htmlElement="link"
                      text="Next step &rarr;"
                      variant="green"
                      href="#"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__logo-box">
          <img
            src="/images/logo-green-2x.png"
            alt="Full logo"
            className="footer__logo"
          />
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Contact us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Carrers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Built by{" "}
              <a href="#" className="footer__link">
                Jonas Schmedtman
              </a>{" "}
              for his online course{" "}
              <a href="#" className="footer__link">
                Advanced CSS and Sass
              </a>
              . Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to
              use this webside for both personal and commercial use, but not to
              claim it as your own design. A credit to the original author,
              Jonas Schmedtmann, is of course highly appreciated!
            </p>
          </div>
        </div>
      </footer>

      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__left">
            <img
              src="/images/nat-8.jpg"
              alt="tour photo"
              className="popup__img"
            />
            <img
              src="/images/nat-9.jpg"
              alt="tour photo"
              className="popup__img"
            />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>

            <h2 className="heading-secondary u-margin-bottom-small">
              Start booking now
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Important &ndash; Please read these terms before booking
            </h3>
            <p className="popup__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              culpa laborum provident fugit molestias amet, pariatur neque
              fugiat minima autem mollitia, veritatis nemo repudiandae possimus
              veniam ullam corporis dignissimos? Quidem vero totam, ex
              voluptatibus minima numquam repellat ratione assumenda nemo, hic
              rerum optio tempora consectetur molestiae veritatis repudiandae
              est nesciunt nulla nihil, ullam harum. Nulla cumque distinctio
              ratione qui accusantium vero consequuntur quisquam pariatur
              voluptas laudantium ex iste voluptates, facilis quis maxime quasi
              dolore beatae aspernatur molestiae repudiandae eos totam
              dignissimos. Dolorum magni, quibusdam ipsam animi reiciendis, esse
              repellendus nostrum laborum architecto, ut necessitatibus impedit
              natus est aspernatur deserunt soluta!
            </p>
            <Button
              htmlElement="link"
              text="Book now"
              variant="green"
              href="#"
            />
          </div>
        </div>
      </div>
    </>
  );
}
