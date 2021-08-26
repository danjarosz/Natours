import classes from "./SectionBook.module.scss";
import Form from "../Form/Form";
import Grid from "../Grid/Grid";

export default function SectionBook() {
  return (
    <section className={classes["section-book"]} id="section-book">
      <Grid element="row">
        <div className={classes["book"]}>
          <div className={classes["book__form"]}>
            <Form />
          </div>
        </div>
      </Grid>
    </section>
  );
}
