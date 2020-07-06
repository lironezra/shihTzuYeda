import React, { useState, useRef } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Preloader, Placeholder } from "react-preloading-screen";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import HomePage from "./pages/Home/home.component";
import AboutUsPage from "./pages/AboutUs/about-us.component";
import FoodPage from "./pages/Food/food.component";
import GroomingPage from "./pages/Grooming/grooming.component";
import EventsPage from "./pages/TeamEvents/events.component";
import Header from "./components/Header/header.component";
import SideDrawer from "./components/SideDrawer/side-drawer.component";
import Footer from "./components/Footer/footer.component";
import Loader from "./components/Shared/Loader/loader.component";
import Backdrop from "./components/Shared/BackDrop/backdrop.component";
import ScrollToTop from "./components/Shared/ScrollToTop/scroll-to-top.component";

import "./App.css";

function App() {
  let backDrop;
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const nodeRef = useRef(null);
  const location = useLocation();

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  if (sideDrawerOpen) {
    backDrop = <Backdrop click={backDropClickHandler} />;
  }

  console.log("app render");
  return (
    <Preloader>
      <div className="App">
        <Header drawerClickHandler={drawerToggleClickHandler} />
        <SideDrawer
          visible={sideDrawerOpen}
          closeSideDrawer={backDropClickHandler}
        />
        {backDrop}

        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            nodeRef={nodeRef}
            timeout={{ enter: 300, exit: 300 }}
          >
            <ScrollToTop>
              <Switch location={location}>
                <Route exact path="/shihTzuYeda" component={HomePage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/food" component={FoodPage} />
                <Route path="/grooming" component={GroomingPage} />
                <Route path="/team-events" component={EventsPage} />
              </Switch>
            </ScrollToTop>
          </CSSTransition>
        </TransitionGroup>

        <Footer />
      </div>

      <Placeholder>
        <Loader />
      </Placeholder>
    </Preloader>
  );
}

export default App;
