import MainSwiper from "../components/Carousel/MainSwiper";
import { LatestArticlesSwiper } from "../components/Latest Articles/LatestArticlesSwiper";
import TabsBtn from "../components/Tab Bar/TabsBtn";
import { AboutUS } from "../components/About US/AboutUS";
import { OurMessage } from "../components/OurMessage/OurMessage";
import { OurStaff } from "../components/OurStaff/OurStaff";
import { CareerDev } from "../components/CareerDeVCenter/CareerDev";
import { ContactUs } from "../components/ContactUs/ContactUs";
import DownloadApp from "../components/DownLoadApp/DownloadApp";

function Home() {
  return (
    <div className="mx-auto space-y-10 max-w-7xl 2xl:max-w-[110rem]">
      <div className="mt-10 lg:mt-20">
        <MainSwiper />
        <LatestArticlesSwiper />
        <TabsBtn />
        <AboutUS />
        <OurMessage />
        <OurStaff />
        <CareerDev />
        <ContactUs />
        <DownloadApp />
      </div>
    </div>
  );
}

export default Home;
