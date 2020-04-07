import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AsyncComponent from "./components/AsyncComponent"
const FooterComponent = AsyncComponent(() => import("./components/Footer"))
class RouterComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <Switch>
              <Route path={"/mobile"} component={FooterComponent}></Route>
              <Redirect to={"/mobile/home"}></Redirect>
            </Switch>
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default RouterComponent;