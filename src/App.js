import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import * as React from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {BrowserRouter , Switch, Route} from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
        <div className="App">
          
        
                <Navbar/>
              

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/menu" component={Menu} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
              
              
                <Footer/>
          

          
        </div>
    </BrowserRouter>
  );
}

export default App;
