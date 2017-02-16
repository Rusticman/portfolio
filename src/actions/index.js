import axios from 'axios';

import {
FORM_APPEARANCE,
EMAIL_CONFIRMED_DIV,
ABOUT_SIDEBAR,
PHOTOGRAPHY_SIDEBAR,
PORTFOLIO_SIDEBAR,
PORTFOLIO_COLOUR,
PHOTOGRAPHY_COLOUR,
ABOUT_COLOUR,
CONTACT_COLOUR
} from './types';

const ROOT_URL = 'https://portfolio-server-rustic.herokuapp.com';

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

export function activateSidebar(whichMenuItem){
  if(whichMenuItem === 'about'){
    return[{
      type:ABOUT_SIDEBAR,
      payload:'active'
    },
    {
      type:PORTFOLIO_SIDEBAR,
      payload:''
    },
    {
      type:PHOTOGRAPHY_SIDEBAR,
      payload:''
    }
  ]
  }
  else if(whichMenuItem === 'photography'){
    return[{
      type:PHOTOGRAPHY_SIDEBAR,
      payload:'active'
    },
    {
      type:PORTFOLIO_SIDEBAR,
      payload:''
    },
    {
      type:ABOUT_SIDEBAR,
      payload:''
    }
  ]
  }
  else if(whichMenuItem === 'portfolio'){
    return[{
      type:PORTFOLIO_SIDEBAR,
      payload:'active'
    },
    {
      type:ABOUT_SIDEBAR,
      payload:''
    },{
      type:PHOTOGRAPHY_SIDEBAR,
      payload:''
    }
  ]
  }
}

export function activateMenuColour(whichItem){

  if(whichItem === 'about'){
    return[{
      type:ABOUT_COLOUR,
      payload:"itemColour"
    },
  {
    type:PHOTOGRAPHY_COLOUR,
    payload:""
  },{
    type:PORTFOLIO_COLOUR,
    payload:""
  },{
    type:CONTACT_COLOUR,
    payload:""
  }]
  }
  else if(whichItem === 'photography'){
    return[{
      type:PHOTOGRAPHY_COLOUR,
      payload:"itemColour"
    },
  {
    type:ABOUT_COLOUR,
    payload:""
  },{
    type:PORTFOLIO_COLOUR,
    payload:""
  },{
    type:CONTACT_COLOUR,
    payload:""
  }]

  }
  else if(whichItem === 'portfolio'){
    return[{
      type:PORTFOLIO_COLOUR,
      payload:"itemColour"
    },
  {
    type:ABOUT_COLOUR,
    payload:""
  },{
    type:PHOTOGRAPHY_COLOUR,
    payload:""
  },{
    type:CONTACT_COLOUR,
    payload:""
  }]
  }
  else if(whichItem === 'contact'){
    return[{
      type:CONTACT_COLOUR,
      payload:"itemColour"
    },
  {
    type:ABOUT_COLOUR,
    payload:""
  },{
    type:PHOTOGRAPHY_COLOUR,
    payload:""
  },{
    type:PORTFOLIO_COLOUR,
    payload:""
  }]
  }

}
