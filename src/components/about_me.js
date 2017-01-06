import React from 'react';

const AboutMe = () =>{

  return(

    <div id="aboutMeContainer">
    <img src="../../style/img/icons/pc.png" id="pcIcon" />

      <div id="introduction">
          <h1>about me {'{'} </h1>
          <br/>
          Hi, my name is Russell.<br/> I have a passion for JavaScript<br/> and taking pretty pictures.<br/>
          I like to build apps using<br/> the MERN stack.<br/>

      </div>
      <div id="iconsAboutMeWrapper1">
        <img src="../../style/img/icons/pencil.png" id="pencilIcon" />
        <img src="../../style/img/icons/browser.png" id="browserIcon" />
      </div>
      <div id="iconsAboutMeWrapper2">
      <span>{'}'}</span>
        <img src="../../style/img/icons/picture.png" id="pictureIcon" />
        <img src="../../style/img/icons/note.png" id="noteIcon" />
        <div id="softwareWrapper">
        <h2>experience with {'{'}</h2><br/>
            <div>JavaScript</div>
            <div>HTML</div>
            <div>CSS</div>
            <div>jQuery</div>
            <div>D3.js</div>
            <div>Bootstrap</div>
            <div>React.js</div>
            <div>MongoDB</div>
            <div>Express</div>
            <div>Node.js</div><br/>
            <span>{'}'}</span>
        </div>
        <img src="../../style/img/icons/disk.png" id="diskIcon" />

      </div>
    </div>

  )
}

export default AboutMe;
