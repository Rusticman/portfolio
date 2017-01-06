import React from 'react';

const EmailConfirmation = (props) =>{
const {emailConfirmedDiv} = props;

  return(

    <div id="emailConfirmation" style={emailConfirmedDiv}>
      <h2>{emailConfirmedDiv.message}</h2>
    </div>
  )
}

export default EmailConfirmation;
