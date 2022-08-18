import HomePage from "./pages/HomePage";
import { Route, Switch } from 'react-router-dom';
import './App.css'
import FormPage from "./pages/FormPage";


function App() {
  return (
    <Switch>
    <Route path='/' exact>
      <HomePage />
    </Route>
    <Route path='/form'>
      <FormPage />
    </Route>
  </Switch>
  );
}

export default App;
