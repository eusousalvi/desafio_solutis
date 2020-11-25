import React, { useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Favorites from './pages/Favorites/Favorites';
import User from './pages/User/User';
import { useDispatch } from 'react-redux';
import { activeMobile, deactivateMobile } from './store/mobile/mobile';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = window.addEventListener('resize', () => {
      const screen = window.screen.width;
      if (screen < 768) {
        dispatch(activeMobile());
      } else {
        dispatch(deactivateMobile());
      }
    });

    return () => window.removeEventListener(listener);
  }, [dispatch]);

  return (
    <div className="app width">
      <Router>
        <GlobalStyle />
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" children={<Home />} />
            <Route exact path="/results/" children={<Results />} />
            <Route exact path="/results/:id" children={<Results />} />
            <Route exact path="/product/:id" children={<Product />} />
            <Route exact path="/cart/" children={<Cart />} />
            <Route exact path="/favorites/" children={<Favorites />} />
            <Route exact path="/user/" children={<User />} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
