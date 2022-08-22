import NavbarComplete from '../components/HomePage/NavbarComplete';
import Hero from '../components/HomePage/Hero';
import Contact from '../components/HomePage/Contact'
import Classes from '../components/HomePage/Classes';
import Groups from '../components/HomePage/Groups'
import Translations from '../components/HomePage/Translations';
import AboutUs from '../components/HomePage/AboutUs';
import Prices from '../components/HomePage/Prices';



function HomePage() {
  return (
    <div>
    <NavbarComplete/>
    <Hero/>
    <AboutUs/>
    <Classes/>
    <Translations/>
    <Groups/>
    <Prices/>
    <Contact/>
    </div>
  );
}

export default HomePage;
