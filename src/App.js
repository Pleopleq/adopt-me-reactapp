import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <Link to="/">
        <h1>Adopt me</h1>
      </Link>
      <Router>
        <SearchParams path="/"></SearchParams>
        <Details path="/details/:id"></Details>
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
