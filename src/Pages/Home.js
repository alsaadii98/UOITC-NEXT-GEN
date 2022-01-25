import Navbar from '../components/Navbar/Navbar'
import HeroCarousel from "../components/Carousel/HeroCarousel";
import LatestArticles from '../components/Latest Articles/LatestArticles'
function Home() {
    return <div>
        <Navbar/>
        <HeroCarousel/>
        <LatestArticles />
    </div>
}

export default Home