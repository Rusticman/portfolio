import React, {PropTypes, Component} from 'react';
import {reduxForm, Field} from 'redux-form';

class EmailForm extends Component{

  handleEmailSubmit(value){
const {emailConfirmationAppear,emailFormAppearance} = this.props;

if(value.email.length > 0 && value.username.length > 0 && value.message.length > 0){
  this.props.sendEmail(value.email, value.username, value.message);

  emailFormAppearance(false)

  value.email = '';
  value.username = '';
  value.message = '';
}
  }

  removeForm(e){
    e.preventDefault();
    this.props.emailFormAppearance(false);
  }



  render(){
    const {handleSubmit,formAppearance} = this.props;

     return(

      <div id="formContainer" style={formAppearance}>
      <h2><img src="../../style/img/icons/paper-airplane.png" />send message:</h2><br/>
        <form id="form" autoComplete="off" onSubmit={handleSubmit(this.handleEmailSubmit.bind(this))}>
          <label>your name:</label><br/><Field name="username" className="formInput"  type="text" component="input" /><br/><br/>
          <label>your email address:</label><br/><Field name="email" className="formInput" type="text" component="input" /><br/><br/>
          <label>message:</label><br/><Field name="message" className="formInput" type="text" component="textArea" /><br/><br/>
            <button action="submit" className="formButtons">SUBMIT</button>
            <button onClick={this.removeForm.bind(this)} className="formButtons">CANCEL</button>
        </form>
      </div>
    )
}
}

function validate(values){
  const errors = {};

  if (!values.username){
    errors.username = 'Please enter your name';
  }
  if (!values.email){
    errors.title = 'Please enter your email address';
  }
  if (!values.message){
    errors.message = "Please enter what you/'d like to say";
  }
  return errors;
}

export default reduxForm({
  form:'emailform',
  validate
})(EmailForm)
