import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import { Home } from "./pages/Home"
import { Buy } from "./pages/Buy"
import { Sale } from "./pages/Sale"
import { NotFound } from "./pages/NotFound"
import Layout from "../src/hoc/Layout/Layout"

class App extends Component {
  render() {
    return (
      <Layout>
        <React.Fragment>
          <Switch>
            <Route path='/buy' component={Buy} />
            <Route path='/sale' component={Sale} />
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </Layout>
    )
  }
}

export default App
