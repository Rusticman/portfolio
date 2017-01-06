import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from '../components/header';
import Homepage from './homepage_container';
import axios from 'axios';

 class App extends Component {

componentWillMount(){
  const ROOT_URL = 'http://localhost:3000';//fires up server
  axios.post(`${ROOT_URL}/fire`)
  .then(response => console.log('contact'))
  .catch(err => console.error(err))
}

  render() {

    return (

      <div id="app">
        <Header />
          <Homepage />

      </div>

    );
  }
}



export default connect(null, actions)(App);
