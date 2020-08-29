import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../../Components/Header/Header";
import AddQuote from "../AddQuote/AddQuote";
import QuotesCenter from "../QuotesCenter/QuotesCenter";
import "./App.css";
import EditPage from "../EditPage/EditPage";
function Redirect(props) {
  useEffect(() => {
    props.history.push("/category/all");
  }, [props]);
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
          <Route path="/qoute/:path" exact component={EditPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
