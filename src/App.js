import HomePage from "./pages/HomePage";
import { Route, Switch } from 'react-router-dom';
import { useState } from "react";
import './App.css'
import FormPage from "./pages/FormPage";
import PricesPage from "./pages/PricesPage";
import {Context} from "./Context";
import TranslationsPage from "./pages/TranslationsPage";
import ScrollToTop from "./utils/ScrollToTop";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  const [chosenLanguage, setChosenLanguage] = useState('Spanish')
  const [chosenEmail, setChosenEmail] = useState('')
  const [choseWantsGroup, setChoseWantsGroup] = useState(false)
  const [chosenPricePack, setChosenPricePack] = useState('')
  const [chosenOnpage, setChosenOnpage] = useState(false)
  const [chosenDuration, setChosenDuration] = useState('')
  const [chosenPrice, setChosenPrice] = useState('')
  
  return (
   <Context.Provider 
   value={{
    language : chosenLanguage, 
    setLanguage : setChosenLanguage,
    email : chosenEmail,
    setEmail: setChosenEmail,
    wantsGroup: choseWantsGroup,
    setWantsGroup: setChoseWantsGroup,
    pricePack: chosenPricePack,
    setPricePack: setChosenPricePack,
    onPage: chosenOnpage,
    setOnPage: setChosenOnpage,
    duration: chosenDuration,
    setDuration: setChosenDuration,
    price: chosenPrice,
    setPrice: setChosenPrice
    }}>
    <ScrollToTop />
    <Switch>
    <Route path='/' exact>
      <HomePage/>
    </Route>
    <Route path='/prices' exact>
      <PricesPage/>
    </Route>
    <Route path='/translations' exact>
      <TranslationsPage/>
    </Route>
    <Route path='/form'>
      <FormPage/>
    </Route>
    <Route path='*'>
      <NotFoundPage/>
    </Route>
  </Switch>
  </Context.Provider>

  );
}

export default App;
