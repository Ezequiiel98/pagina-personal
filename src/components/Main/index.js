import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Portafolio from "./Portafolio";
import Contacto from "./Contacto";

function Main() {
  return(
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sobre-mi" component={AboutMe} />
        <Route exact path="/portafolio" component={Portafolio} />
        <Route exact path="/contacto" component={Contacto} />
      </Switch>
    </div>
  );
}

export default Main;