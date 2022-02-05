import Navbar from "../components/Navbar/Navbar";
import HeroCarousel from "../components/Carousel/HeroCarousel";
import LatestArticles from "../components/Latest Articles/LatestArticles";
import TabsBtn from "../components/Tab Bar/TabsBtn";
import { AboutUS } from "../components/About US/AboutUS";
import { OurMessage } from "../components/OurMessage/OurMessage";
import { OurStaff } from "../components/OurStaff/OurStaff";
import { CareerDev } from "../components/CareerDeVCenter/CareerDev";
import { ContactUs } from "../components/ContactUs/ContactUs";
function Home() {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <LatestArticles />
      <TabsBtn />
      <AboutUS />
      <OurMessage />
      <OurStaff />
      <CareerDev />
      <ContactUs/>
    </div>
  );
}

export default Home;
