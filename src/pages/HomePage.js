import NavbarComplete from '../components/NavbarComplete';
import Hero from '../components/Hero';
import Contact from '../components/Contact'
import ContainerCards from '../components/ContainerCards';
import Groups from '../components/Groups'



function HomePage() {
  return (
    <div>
    <NavbarComplete/>
    <Hero/>
    <ContainerCards/>
    <Groups/>
    <Contact/>
    </div>
  );
}

export default HomePage;
