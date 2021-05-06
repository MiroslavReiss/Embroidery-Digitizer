import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Redirect, Route, useLocation } from "react-router-dom";
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTranstion from "react-transition-group/CSSTransition";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Unknown from "./pages/Unknown";

import "./styles/transition.css";
import Switch from 'react-bootstrap/esm/Switch';

const App: React.FC = () => {
  // const location = useLocation();
 
  return (
    // <ScrollReveal ref={childRef}
    //   // @ts-ignore
    //   children={() => {
        // <TransitionGroup>
        //   <CSSTranstion 
        //     timeout={300}
        //     classNames="transition"
        //     key={location.key}
        //   >
        <Router>
          <div className="Router">
            <Route path="/" exact component={Home} />
            <Route path="/upload" exact component={Upload} />
          </div>
        </Router>
        //   </CSSTranstion>
        // </TransitionGroup>
    //   }}
    // />
  );
}

export default App;
