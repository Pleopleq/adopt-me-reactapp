import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Link to="/">
          <h1>Adopt me</h1>
        </Link>
        <Router>
          <SearchParams path="/"></SearchParams>
          <Details path="/details/:id"></Details>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
