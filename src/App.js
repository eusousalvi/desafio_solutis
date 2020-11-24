import React from 'react';
import { GlobalStyle } from './GlobalStyle';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Favorites from './pages/Favorites/Favorites';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route exact path="/results/" children={<Results />} />
          <Route exact path="/results/:id" children={<Results />} />
          <Route exact path="/product/:id" children={<Product />} />
          <Route exact path="/cart/" children={<Cart />} />
          <Route exact path="/favorites/" children={<Favorites />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
