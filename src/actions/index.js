import axios from 'axios';

import {
FORM_APPEARANCE,
EMAIL_CONFIRMED_DIV
} from './types';

const ROOT_URL = 'http://localhost:3000'

export function emailFormAppearance(boolean){
  if(boolean){
    return{
      type:FORM_APPEARANCE,
      payload:{top:'10%',transform:"scaleX(1)", display:"block", opacity:1}
    }
  }
  else{
    return{
      type:FORM_APPEARANCE,
      payload:{top:'500px',transform:"scaleX(0.7)", display:"none", opacity:0}
    }
  }
}


export function sendEmail(email, person, message, emailConfirmationAppear){
  return function(dispatch){
    axios.post(`${ROOT_URL}/email`, {email:email, person:person, message:message})
    .then(response => {
      dispatch({
        type:EMAIL_CONFIRMED_DIV,
        payload:{top:'10%',transform:"scaleX(1)", display:"block", opacity:1, message:'email was sent successfully.'}
      })
      return setTimeout(() => { dispatch({
        type:EMAIL_CONFIRMED_DIV,
        payload:{top:'500px',transform:"scaleX(0.7)", display:"none", opacity:0, message:'email was sent successfully.'}
    })}, 2000);
    })
    .catch(err =>{
      console.error('there was an error',err);
    })
  }
}
