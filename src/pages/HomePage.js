import NavbarComplete from '../components/HomePage/NavbarComplete';
import Hero from '../components/HomePage/Hero';
import Contact from '../components/HomePage/Contact'
import Classes from '../components/HomePage/Classes';
import Translations from '../components/HomePage/Translations';
import AboutUs from '../components/HomePage/AboutUs';
import Prices from '../components/HomePage/Prices';
import Reviews from '../components/HomePage/Reviews';
import Footer from '../components/HomePage/Footer';



function HomePage() {
  return (
    <div>
    <NavbarComplete/>
    <Hero/>
    <AboutUs/>
    <Classes/>
    <Prices/>
    <Translations/>
    <Reviews/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default HomePage;
