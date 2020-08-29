import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact />
          <Route path="/addQuote" exact />
          <Route path="/category/:category" exact />
          <Route path="/qoute/:id" exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
