import {
FORM_APPEARANCE,
EMAIL_CONFIRMED_DIV
}from '../actions/types';

const INITIAL_STATE = {
 formAppearance:{top:'500px',transform:"scaleX(0.7)", display:"none", opacity:0},
 emailConfirmedDiv:{top:'500px',transform:"scaleX(0.7)", display:"none", opacity:0, message:'email was sent successfully.'}
}

export default function(state = INITIAL_STATE,action){
  switch(action.type){
   case FORM_APPEARANCE:
      return {...state, formAppearance:action.payload}
   case EMAIL_CONFIRMED_DIV:
      return {...state, emailConfirmedDiv:action.payload}
  }

  return state;
}
