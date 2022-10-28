import Form from '../components/FormPage/Form';
import Navbar from '../components/HomePage/NavbarComplete';
import Footer from '../components/HomePage/Footer';

function FormPage() {
  return (
    <div> 
      <Navbar/>
      <div className= "pt-5 pb-5 bg-grey ps-3 pe-3">
      <Form/>
      </div>
      <Footer/>
  
    </div>
  );
}
export default FormPage;