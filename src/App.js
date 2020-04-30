import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Preloader, Placeholder } from 'react-preloading-screen';

import HomePage from './pages/Home/home.component';
import AboutUsPage from './pages/AboutUs/about-us.component';

import Header from './components/Header/header.component';
import Footer from './components/Footer/footer.component';
import Spinner from './components/Shared/Spinner/spinner.component';


import './App.css';

function App() {
  return (
    <Preloader>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/about-us' component={AboutUsPage}/>
        </Switch>

        {/* <HomePage /> */}
        <Footer />
      </div>

      <Placeholder>
        <Spinner />
      </Placeholder>
    </Preloader>
  );
}

export default App;
