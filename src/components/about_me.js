import React from 'react';

const AboutMe = () =>{

  return(

    <div id="aboutMeContainer">
    <img src="../../style/img/icons/pc.png" id="pcIcon" />

      <div id="introduction">
          <h1>about me {'{'} </h1>
          <br/>
          Hi, my name is Russell.<br/> I have a passion for JavaScipt<br/> and taking pretty pictures.<br/>
          I like to build apps using<br/> React.js, CSS and HTML.<br/>
                     <span>{'}'}</span>
      </div>
      <div id="iconsAboutMeWrapper1">
        <img src="../../style/img/icons/pencil.png" id="pencilIcon" />
        <img src="../../style/img/icons/browser.png" id="browserIcon" />
      </div>
      <div id="iconsAboutMeWrapper2">
        <img src="../../style/img/icons/note.png" id="noteIcon" />
        <img src="../../style/img/icons/disk.png" id="diskIcon" />
      </div>
    </div>

  )
}

export default AboutMe;
