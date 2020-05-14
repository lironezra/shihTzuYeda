import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Preloader, Placeholder } from 'react-preloading-screen';

import HomePage from './pages/Home/home.component';
import AboutUsPage from './pages/AboutUs/about-us.component';
import FoodPage from './pages/Food/food.component';

import Header from './components/Header/header.component';
import SideDrawer from './components/SideDrawer/side-drawer.component';
import Footer from './components/Footer/footer.component';
import Loader from './components/Shared/Loader/loader.component';
import Backdrop from './components/Shared/BackDrop/backdrop.component';

import './App.css';

function App() {
  let backDrop;
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  }; 

  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  if (sideDrawerOpen) {
    backDrop = <Backdrop click={backDropClickHandler}/>
  }

  return (
    <Preloader>
      <div className="App">
        <Header drawerClickHandler={drawerToggleClickHandler}/>
        <SideDrawer visible={sideDrawerOpen} closeSideDrawer={backDropClickHandler}/>
        {backDrop}

        <Switch>
          <Route exact path='/shihTzuYeda' component={HomePage}/>
          <Route path='/about-us' component={AboutUsPage}/>
          <Route path='/food' component={FoodPage} />
        </Switch>

        <Footer />
      </div>

      <Placeholder>
        <Loader />
      </Placeholder>
    </Preloader>
  );
}

export default App;
