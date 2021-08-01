export default function Home() {
  return (
    <>
      <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation__item">
              <a href="#" class="navigation__link">
                <span>01</span> About Natours
              </a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link">
                <span>02</span> Your benefots
              </a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link">
                <span>03</span> Popular tours
              </a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link">
                <span>04</span> Stories
              </a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link">
                <span>05</span> Book now
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <header class="header">
        <div class="header__logo-box">
          <img
            src="/images/logo-white.png"
            alt="Natours logo"
            class="header__logo"
          />
        </div>
        <div class="header__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary--main">Outdoors</span>
            <span class="heading-primary--sub">is where life happens</span>
          </h1>
          <a href="#section-tours" class="btn btn--white btn--animated">
            Discover our tours
          </a>
        </div>
      </header>
      <main>
        <section class="section-about" id="section-about">
          <div class="u-center-text">
            <h2 class="heading-secondary u-margin-bottom-big">
              Exciting tours for adventours people
            </h2>
          </div>

          <div class="row">
            <div class="col-1-of-2">
              <h3 class="heading-tertiary u-margin-bottom-small">
                You're going to fall in love with nature
              </h3>
              <p class="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit magnam eius nobis quis eaque architecto voluptatem
                obcaecati! Facere mollitia qui excepturi ipsum eaque? Earum
                error, alias perferendis pariatur harum sed?
              </p>

              <h3 class="heading-tertiary u-margin-bottom-small">
                Live adventures like you never have before
              </h3>
              <p class="paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda expedita delectus quas corrupti, fugit eligendi sequi
                fuga minus in excepturi atque deserunt ex, qui distinctio
                asperiores sapiente, dolores velit dolore!
              </p>

              <a href="#" class="btn-text">
                Learn more &rarr;
              </a>
            </div>
            <div class="col-1-of-2">
              <div class="composition">
                <img
                  srcset="/images/nat-1.jpg 300w, /images/nat-1-large.jpg 1000w"
                  sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
                  alt="Photo 1"
                  class="composition__photo composition__photo--p1"
                  src="/images/nat-1-large.jpg"
                />
                <img
                  srcset="/images/nat-2.jpg 300w, /images/nat-2-large.jpg 1000w"
                  sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
                  alt="Photo 2"
                  class="composition__photo composition__photo--p2"
                  src="/images/nat-2-large.jpg"
                />
                <img
                  srcset="/images/nat-3.jpg 300w, /images/nat-3-large.jpg 1000w"
                  sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
                  alt="Photo 3"
                  class="composition__photo composition__photo--p3"
                  src="/images/nat-3-large.jpg"
                />
              </div>
            </div>
          </div>
        </section>
        <section class="section-features" id="section-features">
          <div class="row">
            <div class="col-1-of-4">
              <div class="feature-box">
                <i class="feature-box__icon fas fa-globe"></i>
                <h3 class="heading-tertiary u-margin-bottom-small">
                  Explore the world
                </h3>
                <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  eaque praesentium quibusdam vero consequatur alias incidunt.
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="feature-box">
                <i class="feature-box__icon far fa-compass"></i>
                <h3 class="heading-tertiary u-margin-bottom-small">
                  Meet nature
                </h3>
                <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  eaque praesentium quibusdam vero consequatur alias incidunt.
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="feature-box">
                <i class="feature-box__icon far fa-map"></i>
                <h3 class="heading-tertiary u-margin-bottom-small">
                  Find your way
                </h3>
                <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  eaque praesentium quibusdam vero consequatur alias incidunt.
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="feature-box">
                <i class="feature-box__icon fas fa-heartbeat"></i>
                <h3 class="heading-tertiary u-margin-bottom-small">
                  Live a healthier life
                </h3>
                <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  eaque praesentium quibusdam vero consequatur alias incidunt.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="section-tours" id="section-tours">
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary ">Most popular tours</h2>
          </div>

          <div class="row">
            <div class="col-1-of-3">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--1">&nbsp;</div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--1">
                      the sea explorer
                    </span>
                  </h4>

                  <div class="card__details">
                    <ul>
                      <li>3 day tour</li>
                      <li>Up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>Sleep in cosy hotels</li>
                      <li>Difficulty: easy</li>
                    </ul>
                  </div>
                </div>
                <div class="card__side card__side--back card__side--back-1">
                  <div class="card__cta">
                    <div class="card__price-box">
                      <p class="card__price-only">Only</p>
                      <p class="card__price-value">$297</p>
                    </div>
                    <a href="#popup" class="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-1-of-3">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--2">&nbsp;</div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--2">
                      the forest hiker
                    </span>
                  </h4>

                  <div class="card__details">
                    <ul>
                      <li>7 day tour</li>
                      <li>Up to 40 people</li>
                      <li>6 tour guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Difficulty: medium</li>
                    </ul>
                  </div>
                </div>
                <div class="card__side card__side--back card__side--back-2">
                  <div class="card__cta">
                    <div class="card__price-box">
                      <p class="card__price-only">Only</p>
                      <p class="card__price-value">$497</p>
                    </div>
                    <a href="#popup" class="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-1-of-3">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--3">&nbsp;</div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--3">
                      the snow adventurer
                    </span>
                  </h4>

                  <div class="card__details">
                    <ul>
                      <li>5 day tour</li>
                      <li>Up to 15 people</li>
                      <li>3 tour guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Difficulty: hard</li>
                    </ul>
                  </div>
                </div>
                <div class="card__side card__side--back card__side--back-3">
                  <div class="card__cta">
                    <div class="card__price-box">
                      <p class="card__price-only">Only</p>
                      <p class="card__price-value">$897</p>
                    </div>
                    <a href="#popup" class="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="u-center-text u-margin-top-huge">
            <a href="#" class="btn btn--green">
              Discover all tours
            </a>
          </div>
        </section>
        <section class="section-stories" id="section-stories">
          <div class="bg-video">
            <video class="bg-video__content" autoplay muted loop>
              <source src="/images//video.mp4" type="video/mp4" />
              <source src="/images/video.webm" type="video/webm" />
              Your broweser is not supported!
            </video>
          </div>
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary ">We make people genuiely happy</h2>
          </div>

          <div class="row">
            <div class="story">
              <figure class="story__shape">
                <img
                  src="/images/nat-8.jpg"
                  alt="person on a tour"
                  class="story__img"
                />
                <figcaption class="story__caption">Marry Smith</figcaption>
              </figure>
              <div class="story__text">
                <h3 class="headeing-tertiary u-margin-bottom-small">
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

          <div class="row">
            <div class="story">
              <figure class="story__shape">
                <img
                  src="/images/nat-9.jpg"
                  alt="person on a tour"
                  class="story__img"
                />
                <figcaption class="story__caption">Jack Willson</figcaption>
              </figure>
              <div class="story__text">
                <h3 class="headeing-tertiary u-margin-bottom-small">
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

          <div class="u-center-text u-margin-top-huge">
            <a href="#" class="btn btn-text">
              Read all stories &rarr;
            </a>
          </div>
        </section>
        <section class="section-book" id="section-book">
          <div class="row">
            <div class="book">
              <div class="book__form">
                <form action="#" class="form">
                  <div class="u-margin-bottom-medium">
                    <h2 class="heading-secondary ">Start booking now</h2>
                  </div>

                  <div class="form__group">
                    <input
                      type="text"
                      class="form__input"
                      placeholder="Full Name"
                      id="name"
                      required
                    />
                    <label for="name" class="form__label">
                      Full name
                    </label>
                  </div>

                  <div class="form__group">
                    <input
                      type="email"
                      class="form__input"
                      placeholder="Email address"
                      id="email"
                      required
                    />
                    <label for="email" class="form__label">
                      Email address
                    </label>
                  </div>

                  <div class="form_group">
                    <div class="form__radio-group">
                      <input
                        type="radio"
                        class="form__radio-input"
                        id="small"
                        name="size"
                      />
                      <label for="small" class="form__radio-label">
                        <span class="form__radio-button"></span>
                        Small group
                      </label>
                    </div>
                    <div class="form__radio-group u-margin-bottom-medium">
                      <input
                        type="radio"
                        class="form__radio-input"
                        id="large"
                        name="size"
                      />
                      <label for="large" class="form__radio-label">
                        <span class="form__radio-button"></span>
                        Large group
                      </label>
                    </div>
                  </div>

                  <div class="form_group">
                    <buttton class="btn btn--green">Next step &rarr;</buttton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="footer">
        <div class="footer__logo-box">
          <img
            src="/images/logo-green-2x.png"
            alt="Full logo"
            class="footer__logo"
          />
        </div>

        <div class="row">
          <div class="col-1-of-2">
            <div class="footer__navigation">
              <ul class="footer__list">
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Company
                  </a>
                </li>
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Contact us
                  </a>
                </li>
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Carrers
                  </a>
                </li>
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-1-of-2">
            <p class="footer__copyright">
              Built by{" "}
              <a href="#" class="footer__link">
                Jonas Schmedtman
              </a>{" "}
              for his online course{" "}
              <a href="#" class="footer__link">
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

      <div class="popup" id="popup">
        <div class="popup__content">
          <div class="popup__left">
            <img src="/images/nat-8.jpg" alt="tour photo" class="popup__img" />
            <img src="/images/nat-9.jpg" alt="tour photo" class="popup__img" />
          </div>
          <div class="popup__right">
            <a href="#section-tours" class="popup__close">
              &times;
            </a>

            <h2 class="heading-secondary u-margin-bottom-small">
              Start booking now
            </h2>
            <h3 class="heading-tertiary u-margin-bottom-small">
              Important &ndash; Please read these terms before booking
            </h3>
            <p class="popup__text">
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
            <a href="#" class="btn btn--green">
              Book now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
