import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import './responsive.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './Components/Homepage';
import ContactPage from './Components/ContactPage';
import AboutPage from './Components/AboutPage';
import Products from './Components/Products';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
    <div className="content">
      <Switch>
        <Route exact path="/">
        <HomePage/>
        </Route>
        <Route exact path="/about">
        <AboutPage/>
        </Route>
        <Route exact path="/products">
        <Products/>
        </Route>
        <Route exact path="/contactus">
        <ContactPage/>
        </Route>
      </Switch>
    </div>
    <Footer/>
     

    </div>
    </Router>
  );
}

export default App;
