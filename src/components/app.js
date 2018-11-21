import { h } from "htm/preact/standalone";
import Router from "preact-router";
import AsyncRoute from "preact-async-route";
import Home from "./home";

export default () => (
  <Router>
    <Home path="/" />
    <AsyncRoute
      path="/play"
      getComponent={() => import("./match-game").then(module => module.default)}
    />
  </Router>
);
