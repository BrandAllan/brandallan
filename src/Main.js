import React, {Component} from "react";

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Trains from "./Trains";
import Tanks from "./Tanks";
import Corn from "./Corn";
import Strudel from "./Strudel";
import LumpyDitto from "./LumpyDitto";
import Brbrbrbr from "./Brbrbrbr";
import Shape from "./Shape";


class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <h1>Stuff that is #BrandAllan</h1>
            <ul className="header">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/trains">Trains</Link></li>
              <li><Link to="/tanks">Tanks</Link></li>
              <li><Link to="/corn">Corn</Link></li>
              <li><Link to="/strudel">Strudel</Link></li>
              <li><Link to="/ditto">Ditto</Link></li>
              <li><Link to="/brbrbrbr">Brbrbrbr</Link></li>
              <li><Link to="/shape">Shape</Link></li>
            </ul>
          </nav>

            {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/trains"><Trains/></Route>
            <Route exact path="/tanks"><Tanks/></Route>
            <Route exact path="/corn"><Corn/></Route>
            <Route exact path="/strudel"><Strudel/></Route>
            <Route exact path="/ditto"><LumpyDitto/></Route>
            <Route exact path="/brbrbrbr"><Brbrbrbr/></Route>
            <Route exact path="/shape"><Shape/></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Main;