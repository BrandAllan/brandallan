import React, {Component} from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Trains from "./Trains";
import Tanks from "./Tanks";
import Corn from "./Corn";
import Strudel from "./Strudel";
import LumpyDitto from "./LumpyDitto";
import Brbrbrbr from "./Brbrbrbr";
import Boop from "./Boop";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Stuff that is #BrandAllan</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/trains">Trains</NavLink></li>
            <li><NavLink to="/tanks">Tanks</NavLink></li>
            <li><NavLink to="/corn">Corn</NavLink></li>
            <li><NavLink to="/strudel">Strudel</NavLink></li>
            <li><NavLink to="/ditto">Ditto</NavLink></li>
            <li><NavLink to="/brbrbrbr">Brbrbrbr</NavLink></li>
            <li><NavLink to="/boop">Boop</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/trains" component={Trains}/>
            <Route path="/tanks" component={Tanks}/>
            <Route path="/corn" component={Corn}/>
            <Route path="/strudel" component={Strudel}/>
            <Route path="/ditto" component={LumpyDitto}/>
            <Route path="/brbrbrbr" component={Brbrbrbr}/>
            <Route path="/boop" component={Boop}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;