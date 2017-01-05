import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import AboutMe  from '../components/about_me';
import Portfolio from '../components/portfolio';
import Photography from '../components/photography';
import Contact from '../components/contact';


 class Homepage extends Component {


  render() {

    return (
      <div id="homepage">
        <AboutMe />
        <Portfolio />
        <Photography />
        <Contact />
      </div>
    )
  }
}



export default connect(null, actions)(Homepage)
