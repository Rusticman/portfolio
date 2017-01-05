import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from '../components/header';
import Homepage from './homepage_container';
import Footer from '../components/footer';



 class App extends Component {


  render() {

    return (

      <div id="app">
        <Header />
          <Homepage />
        <Footer />
      </div>

    );
  }
}



export default connect(null, actions)(App);
