import HeaderSection from "./HeaderSection";
import AboutOcean from "./AboutOcean";
import AboutSection from "./AboutSection";
import FeaturedCard1 from "./FeaturedCard1";
import FeaturedCard2 from "./FeaturedCard2";
import PlacedStudents from "./PlacedStudents";
import Methodology from "./Methodology";
import Footer from "./Footer";
import TechnicalButton from "./TechnicalButton";
import Placementstats from "./Placementstats";





export default function Placement_Home() {
  return (
    <>
      <HeaderSection />
      <AboutOcean/>
      <AboutSection />
      <FeaturedCard1 />
      <FeaturedCard2 />
      <TechnicalButton/>
      <Placementstats />
      <PlacedStudents />
      <Methodology/>
      <Footer/>
    </>
  );
}
