import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../../Components/Header/Header";
import AddQuote from "../AddQuote/AddQuote";
import QuotesCenter from "../QuotesCenter/QuotesCenter";
import "./App.css";
function Redirect(props) {
  useEffect(() => {
    props.history.push("/category/all");
  }, []);
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Redirect} />
          <Route path="/category/" exact component={Redirect} />
          <Route path="/addQuote" exact component={AddQuote} />
          <Route path="/category/:category" exact component={QuotesCenter} />
          <Route path="/qoute/:id" exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
