import Popup from "../components/Popup/Popup";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import SectionAbout from "../components/SectionAbout/SectionAbout";
import SectionFeatures from "../components/SectionFeatures/SectionFeatures";
import SectionTours from "../components/SectionTours/SectionTours";
import SectionStories from "../components/SectionStories/SectionStories";
import SectionBook from "../components/SectionBook/SectionBook";

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <SectionAbout />
        <SectionFeatures />
        <SectionTours />
        <SectionStories />
        <SectionBook />
      </main>
      <Footer />
      <Popup />
    </>
  );
}
