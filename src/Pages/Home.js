import Navbar from "../components/Navbar/Navbar";
import HeroCarousel from "../components/Carousel/HeroCarousel";
import LatestArticles from "../components/Latest Articles/LatestArticles";
import TabsBtn from "../components/Tab Bar/TabsBtn";
import Hero from "../components/Carousel/Hero";
import { AboutUS } from "../components/About US/AboutUS";
function Home() {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <LatestArticles />
      {/* <Hero /> */}
        <TabsBtn/>
        <AboutUS/>
    </div>
  );
}

export default Home;
