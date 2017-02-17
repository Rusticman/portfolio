import React from 'react';

const AboutMe = () =>{

  return(

    <div className="aboutMeContainer container-fluid">
      <div className="row">
        <div className="col-sm-2 col-sm-offset-1">
          <img src="../../style/img/icons/pc.png" className="pcImg" />
        </div>
        <div className="introduction col-xs-6 col-sm-2 col-sm-offset-1">
          <h1>about me{'{'} </h1>
          <br/>
          Hi, my name is Russell.<br/> I have a passion for JavaScript<br/> and taking pretty pictures.<br/>
          I like to build apps using<br/> the MERN stack.<br/>
          <span>{'}'}</span>
        </div>
        <div className="col-sm-1">
          <img src="../../style/img/icons/pencil.png" className="pencilImg aboutMeImg" />
        </div>
        <div className="col-sm-1 col-sm-offset-1">
          <img src="../../style/img/icons/browser.png" className="browserImg aboutMeImg" />
        </div>
        <div className="col-sm-1">
          <img src="../../style/img/icons/picture.png" className="pictureImg aboutMeImg" />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-1 col-sm-offset-2">
          <img src="../../style/img/icons/note.png" className="aboutMeImg" />
        </div>
        <div className="softwareWrapper col-xs-5 col-sm-3 col-sm-offset-2">
          <h1>experience with{'{'}</h1><br/>
          <div>JavaScript</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>jQuery</div>
          <div>D3.js</div>
          <div>Bootstrap</div>
          <div>React.js</div>
          <div>MongoDB</div>
          <div>Express</div>
          <div>Angular.js</div>
          <div>Grunt</div>
          <div>Node.js</div><br/>
          <span>{'}'}</span>
        </div>
        <div className="col-sm-1 col-sm-offset-1">
          <img src="../../style/img/icons/disk.png" className="discImg aboutMeImg" />
        </div>
      </div>

    </div>


  )
}

export default AboutMe;
