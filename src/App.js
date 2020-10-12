import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route to="/" exact>
            <Home />
          </Route>
          <Route to="/search">
            <SearchPage />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
