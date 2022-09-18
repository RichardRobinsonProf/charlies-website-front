import HomePage from "./pages/HomePage";
import { Route, Switch } from 'react-router-dom';
import { useState } from "react";
import './App.css'
import FormPage from "./pages/FormPage";
import ContextChosenLanguage from "./Context";




function App() {
  const [chosenLanguage, setChosenLanguage] = useState('Spanish')
  return (
   <ContextChosenLanguage.Provider value={{language : chosenLanguage, setLanguage : setChosenLanguage}}>
    <Switch>
    <Route path='/' exact>
      <HomePage />
    </Route>
    <Route path='/form'>
      <FormPage/>
    </Route>
  </Switch>
  </ContextChosenLanguage.Provider>

  );
}

export default App;
