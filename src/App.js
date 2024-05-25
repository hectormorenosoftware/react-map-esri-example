import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import Map from "./components/Map";

class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Map />} />
      </Switch>
    );
  }
}

export default withRouter(App);
