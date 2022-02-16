import Navbar from "../components/Navbar/Navbar";
import MainSwiper from "../components/Carousel/MainSwiper";
import { LatestArticlesSwiper } from "../components/Latest Articles/LatestArticlesSwiper";
import TabsBtn from "../components/Tab Bar/TabsBtn";
import { AboutUS } from "../components/About US/AboutUS";
import { OurMessage } from "../components/OurMessage/OurMessage";
import { OurStaff } from "../components/OurStaff/OurStaff";
import { CareerDev } from "../components/CareerDeVCenter/CareerDev";
import { ContactUs } from "../components/ContactUs/ContactUs";
import DownloadApp from '../components/DownLoadApp/DownloadApp'
import Footer from '../components/Footer/Footer'
function Home() {
  return (
    <div>
      <Navbar />
      <MainSwiper />
      <LatestArticlesSwiper/>
      <TabsBtn />
      <AboutUS />
      <OurMessage />
      <OurStaff />
      <CareerDev />
      <ContactUs />
      <DownloadApp/>
      <Footer/>
    </div>
  );
}

export default Home;
