import Form from '../components/FormPage/Form';
import Navbar from '../components/HomePage/NavbarComplete';
import Footer from '../components/HomePage/Footer';

function NotFoundPage() {
  return (
    <div > 
      <Navbar/>
      <div className= "fullscreen d-flex justify-content-center align-items-center text-center">
        <h1>404: Page not found</h1>
      </div>
      <Footer/>
  
    </div>
  );
}
export default NotFoundPage;