import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import TranslateHistoryList from "./components/TranslateHistoryList";
import TranslatePage from "./components/TranslatePage"
import Home from "./containers/Home";
import { NavLink } from "react-router-dom";
import TranslateDetail from "./components/TranslateDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2 className="container-home">
              <NavLink to="/" className="container-title">Translator</NavLink>    
          </h2>
          <p className="note">*Click title to return homepage!</p>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/translate" component={TranslatePage}/>
            <Route exact path="/translateHistory" component={TranslateHistoryList}/>
            <Route exact path="/detail/:id" component={TranslateDetail}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
