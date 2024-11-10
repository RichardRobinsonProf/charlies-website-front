import {  useEffect } from 'react';
import WOW from "wowjs";


const useWow = () => {
    useEffect(() => {
        new WOW.WOW({
        live: false
      }).init();
        
      }, []);
};

export default useWow;