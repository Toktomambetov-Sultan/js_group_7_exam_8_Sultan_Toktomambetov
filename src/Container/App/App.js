import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../../Components/Header/Header";
import AddQuote from "../AddQuote/AddQuote";
import "./App.css";
import QuotesCenter from "../QuotesCenter/QuotesCenter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={QuotesCenter}/>
          <Route path="/addQuote" exact component={AddQuote} />
          <Route path="/category/:category" exact />
          <Route path="/qoute/:id" exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
