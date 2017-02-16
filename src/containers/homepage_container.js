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
import Sidebar from '../components/sidebar';

 class Homepage extends Component {


  render() {

    return (
      <div id="homepage">
        <Sidebar aboutSidebar={this.props.aboutSidebar}
                 portfolioSidebar={this.props.portfolioSidebar}
                 photographySidebar={this.props.photographySidebar}
                 aboutColour={this.props.aboutColour}
                 contactColour={this.props.contactColour}
                 portfolioColour={this.props.portfolioColour}
                 photographyColour={this.props.photographyColour}
                 activateSidebar={this.props.activateSidebar}
                 activateMenuColour={this.props.activateMenuColour}
               />
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
    emailConfirmedDiv:state.style.emailConfirmedDiv,
    aboutSidebar:state.style.aboutSidebar,
    portfolioSidebar:state.style.portfolioSidebar,
    photographySidebar:state.style.photographySidebar,
    aboutColour:state.style.aboutColour,
    portfolioColour:state.style.portfolioColour,
    photographyColour:state.style.photographyColour,
    contactColour:state.style.contactColour
  }
}


export default connect(mapStatToProps, actions)(Homepage)
