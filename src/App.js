import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import "./App.css";
import "bulma/css/bulma.css";
import { Helmet } from 'react-helmet'

import { Detail } from "./pages/Detail.js"
import { Home } from "./pages/Home.js"
import { NotFound } from "./pages/NotFound.js"

class App extends Component {
  render () {

    return (
      <div className="App">
        <Helmet htmlAttributes={{style: 'background-color : hsl(0, 0%, 85%)'}}>
        </Helmet>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:id' component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }

}

export default App;
