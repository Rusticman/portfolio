import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import AboutMe  from '../components/about_me';
import Portfolio from '../components/portfolio';
import Photography from '../components/photography';
import Contact from '../components/contact';
import Footer from '../components/footer';
import EmailForm from '../components/email_form';
import EmailConfirmation from '../components/email_confirmation';

 class Homepage extends Component {


  render() {

    return (
      <div id="homepage">
        <AboutMe />
        <Portfolio />
        <Photography />
        <Contact emailFormAppearance={this.props.emailFormAppearance}/>
        <Footer />
        <EmailForm emailConfirmationAppear={this.props.emailConfirmationAppear} sendEmail={this.props.sendEmail} formAppearance={this.props.formAppearance} emailFormAppearance={this.props.emailFormAppearance}/>
        <EmailConfirmation emailConfirmedDiv={this.props.emailConfirmedDiv} emailConfirmationAppear={this.props.emailConfirmationAppear} />
      </div>
    )
  }
}

function mapStatToProps(state){
  return{
    formAppearance:state.style.formAppearance,
    emailConfirmedDiv:state.style.emailConfirmedDiv
  }
}


export default connect(mapStatToProps, actions)(Homepage)
