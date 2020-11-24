// App.js maintains the Route / React part of the app.
import React, { Component } from 'react';
// used for navigation around the dom.
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Landing from './Landing';
import Header from './Header';
import * as actions from '../actions';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>Survey new</h2>

class App extends Component {

  // fetch current user the moment the component is mounted
  componentDidMount() {
    this.props.fetchUser();
  }

  render(){
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/survey" component={Dashboard} />
            <Route path="/survey/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
