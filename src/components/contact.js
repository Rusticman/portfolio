import React from 'react';

const Contact = (props) =>{
const {emailFormAppearance} = props;

const triggerForm = () => {
  emailFormAppearance(true);
}

  return(

    <div id="contactHref" className="contactContainer container-fluid" onClick={triggerForm}>
      <div className="row">
        <div className="contactWrapper col-xs-10 col-sm-4 col-md-4 col-lg-4 col-xs-offset-1 col-sm-offset-4 col-md-offset-4 col-lg-offset-4">
          <img src="../../style/img/icons/letter.png" /><span> contact me</span>
        </div>
      </div>
    </div>

  )
}

export default Contact;
