import axios from "axios";
import { useState, useEffect } from "react";
import Prices from "../components/PricesPages/Prices";  
import Footer from "../components/HomePage/Footer";
import NavbarComplete from "../components/HomePage/NavbarComplete";



const PricesPage = () => {


    const [state, setState] = useState({
        ip: "",
        countryName: "",
        countryCode: "",
        city: "",
        timezone: "",
      });

    
    const getGeoInfo = () => {
        axios
          .get("https://ipapi.co/json/")
          .then((response) => {
            let data = response.data;
            setState({
              ...state,
              ip: data.ip,
              countryName: data.country_name,
              countryCode: data.country_calling_code,
              city: data.city,
              timezone: data.timezone

            });
           
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      useEffect(() => {
        if (state.countryName === "")
        { 
          getGeoInfo(); 
        } else {
          return
        }
      },);

 
  
    return (
        <div>
        <NavbarComplete/>
        <Prices countryName = {state.countryName}/>
        <Footer/>
         
      </div>
    );
    }

export default PricesPage;