import React from 'react';

const Photography = () =>{

  return(

    <div id="photographyContainer">
          <h1><img src="../../style/img/icons/camera.png"/>  photography {'{'} </h1>
          <br/>
          <div id="photographyWrapper">
            <img src="../../style/img/photography/chairs.png" className="photographyImg" />
            <img src="../../style/img/photography/monks.png" className="photographyImg" />
            <img src="../../style/img/photography/night-sky.jpg" className="photographyImg" />
            <img src="../../style/img/photography/sunset.png" className="photographyImg" />
            <img src="../../style/img/photography/umbrella-boys.jpg" className="photographyImg" />
            <img src="../../style/img/photography/walkway.png" className="photographyImg" />
          </div>
          <br/>
          <span> {'}'}</span>
    </div>

  )
}

export default Photography;
