import NavbarComplete from '../components/HomePage/NavbarComplete';
import Hero from '../components/HomePage/Hero';
import Contact from '../components/HomePage/Contact'
import Classes from '../components/HomePage/Classes';
import Translations from '../components/HomePage/Translations';
import AboutUs from '../components/HomePage/AboutUs';
import Prices from '../components/HomePage/Prices';
import Reviews from '../components/HomePage/Reviews';
import Footer from '../components/HomePage/Footer';
import CompaniesThatTrustUs from '../components/HomePage/CompaniesThatTrustUs';
import { Fragment } from 'react';



function HomePage() {
  return (
  <Fragment>
    <div className="text-font">
    <NavbarComplete/>
    <Hero/>
    <AboutUs/>
    <Classes/>
    <Prices/>
    <Translations/>
    <Reviews/>
    <CompaniesThatTrustUs/>
    <Contact/>
    <Footer/> 
    </div>
    </Fragment>
  );
}

export default HomePage;
