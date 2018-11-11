import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import FormPage from './components/layout/FormPage';
import Dashboard from './components/layout/Dashboard';
import { Provider } from "react-redux";
import store from "./store.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './muiTheme';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <Switch>
          <Layout>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/formpage" component={FormPage} />
          </Layout>
          </Switch>
          </Router>
          </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
