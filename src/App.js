import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop'
import './App.css';

import Navbar from './components/navbar/Navbar';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';
import Home from './components/home/Home'


const App = () => {

  const [state, setState] = useState(false)

  const drawerToggleClickHandler = () => {
    setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };

  const backdropClickHandler = () => {
    setState({ sideDrawerOpen: false })
  }

  let backdrop;

  if (state.sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }




  return (
    <div className="App_Container">
      <div style={{ height: '100%' }}>
        <Router>
          <Navbar drawerClickHandler={drawerToggleClickHandler} />
          <ScrollToTop>
            <SideDrawer show={state.sideDrawerOpen} drawerClickHandler={drawerToggleClickHandler} />
            {backdrop}
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </ScrollToTop>
        </Router>
      </div>
    </div>
  );
}

export default App;
