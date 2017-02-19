import React from 'react';

const AboutMe = () =>{

  return(

    <div id="aboutMeHref" className="aboutMeContainer container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-2 col-sm-offset-1">
          <img src="../../style/img/icons/pc.png" className="pcImg" />
        </div>
        <div className="introduction col-xs-8 col-sm-3 col-sm-offset-1">
          <h1>about me{'{'} </h1>
          <br/>
          Hi, my name is Russell.  I have a <br/>
          passion for JavaScript and taking pretty<br/>
          pictures.  I'm completely self taught, and<br/>
          I like to build apps using the MERN stack.<br/>
          In my spare time,  I like to contribute to<br/>
          open source projects on <a href="https://github.com/Rusticman" target="_blank" className="followMe">github.</a><br/>
          <span style={{"padding-left":"50%"}}>{'}'}</span>
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
        <div className="softwareWrapper col-xs-8 col-sm-3 col-sm-offset-2">
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
