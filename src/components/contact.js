import React from 'react';

const Contact = (props) =>{
const {emailFormAppearance} = props;

const triggerForm = () => {
  emailFormAppearance(true);
}

  return(

    <div id="contactContainer" onClick={triggerForm}>
<div id="contactWrapper">
<img src="../../style/img/icons/letter.png" /><span> contact me</span>
</div>
    </div>

  )
}

export default Contact;
