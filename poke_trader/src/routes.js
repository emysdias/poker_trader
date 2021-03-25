import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Introduction from "./pages/introduction";
import Player1 from "./pages/player1";
import Player2 from "./pages/player2";
import Result from "./pages/result";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Introduction />
        </Route>
        <Route path="/first">
          <Player1 />
        </Route>
        <Route path="/second">
          <Player2 />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
