import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './Homepage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';

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
