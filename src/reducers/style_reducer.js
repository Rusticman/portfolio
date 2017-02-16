import {
FORM_APPEARANCE,
EMAIL_CONFIRMED_DIV,
ABOUT_SIDEBAR,
PORTFOLIO_SIDEBAR,
PHOTOGRAPHY_SIDEBAR,
PHOTOGRAPHY_COLOUR,
PORTFOLIO_COLOUR,
ABOUT_COLOUR,
CONTACT_COLOUR
}from '../actions/types';

const INITIAL_STATE = {
 formAppearance:{top:'500px',transform:"scaleX(0.7)", display:"none", opacity:0},
 emailConfirmedDiv:{top:'500px',transform:"scaleX(0.7)", display:"none", opacity:0, message:'email was sent successfully.'},
 aboutSidebar:'',
 photographySidebar:'',
 portfolioSidebar:'',
 aboutColour:'',
 portfolioColour:'',
 photographyColour:'',
 contactColour:''
}

export default function(state = INITIAL_STATE,action){
  switch(action.type){
  case FORM_APPEARANCE:
      return {...state, formAppearance:action.payload}
  case EMAIL_CONFIRMED_DIV:
      return {...state, emailConfirmedDiv:action.payload}
  case ABOUT_SIDEBAR:
      return {...state, aboutSidebar:action.payload}
  case PORTFOLIO_SIDEBAR:
      return {...state, portfolioSidebar:action.payload}
  case PHOTOGRAPHY_SIDEBAR:
      return {...state, photographySidebar:action.payload}
  case PORTFOLIO_COLOUR:
      return {...state, portfolioColour:action.payload}
  case ABOUT_COLOUR:
      return {...state, aboutColour:action.payload}
  case PHOTOGRAPHY_COLOUR:
      return {...state, photographyColour:action.payload}
  case CONTACT_COLOUR:
      return {...state, contactColour:action.payload}
  }

  return state;
}
