import HomePage from "./pages/HomePage";
import { Route, Switch } from 'react-router-dom';
import { useState } from "react";
import './App.css'
import FormPage from "./pages/FormPage";
import PricesPage from "./pages/PricesPage";
import ContextChosenLanguage from "./Context";
import TranslationsPage from "./pages/TranslationsPage";
import ScrollToTop from "./utils/ScrollToTop";


function App() {
  const [chosenLanguage, setChosenLanguage] = useState('Spanish')
  return (
   <ContextChosenLanguage.Provider value={{language : chosenLanguage, setLanguage : setChosenLanguage}}>
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
  </Switch>
  </ContextChosenLanguage.Provider>

  );
}

export default App;
