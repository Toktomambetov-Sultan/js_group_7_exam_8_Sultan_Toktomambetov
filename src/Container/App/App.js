import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../../Components/Header/Header";
import AddQuote from "../AddQuote/AddQuote";
import QuotesCenter from "../QuotesCenter/QuotesCenter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={props => {
              props.history.push("/category/all");
              return null;
            }}
          />
          <Route
            path="/category"
            exact
            render={props => {
              props.history.push("/category/all");
              return null;
            }}
          />
          <Route path="/addQuote" exact component={AddQuote} />
          <Route path="/category/:category" exact component={QuotesCenter} />
          <Route path="/qoute/:id" exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
