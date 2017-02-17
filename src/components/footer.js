import React from 'react';

const Footer = () =>{

  return(

    <div className="footer container-fluid">
      <div className="row footerRow">
        <div className="followMeWrapper col-xs-4 col-sm-4 col-md-2 col-lg-2">
          <h3>follow me:</h3>
          <div>
            <a href="https://twitter.com/Gambei_Russell" target="_blank" className="followMe">twitter</a>
          </div>
          <div>
            <a href="https://github.com/Rusticman" target="_blank" className="followMe">github</a>
          </div>
          <div>
            <a href="https://codepen.io/Rusticman/" target="_blank" className="followMe">codepen</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="codeByRuss col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
          <span>code by rusticman</span>
        </div>
      </div>
    </div>

  )
}

export default Footer;
