import React from 'react';

const Photography = () =>{

  return(

    <div id="photographyHref" className="photographyContainer container-fluid">
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">
        <h1><img src="../../style/img/icons/camera.png" className="cameraImg"/>  photography {'{'} </h1>
        <br/>
        </div>
      </div>
      <div className="row">
        <div className="photographyImgWrapper col-xs-10 col-sm-8 col-sm-offest-2 col-md-3 col-md-offset-1">
          <img src="../../style/img/photography/chairs.png" className="photographyImg" />
        </div>
        <div className="photographyImgWrapper col-xs-10 col-sm-8 col-sm-offest-2 col-md-3">
          <img src="../../style/img/photography/monks.png" className="photographyImg" />
        </div>
        <div className="photographyImgWrapper col-xs-10 col-sm-8 col-sm-offest-2 col-md-3">
          <img src="../../style/img/photography/night-sky.jpg" className="photographyImg" />
        </div>
      </div>
      <div className="row">
        <div className="photographyImgWrapper col-xs-10 col-sm-8 col-sm-offest-2 col-md-3 col-md-offset-1">
          <img src="../../style/img/photography/sunset.png" className="photographyImg" />
        </div>
        <div className="photographyImgWrapper col-xs-10 col-sm-8 col-sm-offest-2 col-md-3">
          <img src="../../style/img/photography/umbrella-boys.jpg" className="photographyImg" />
        </div>
        <div className="photographyImgWrapper col-xs-10 col-sm-8 col-sm-offest-2 col-md-3">
          <img src="../../style/img/photography/walkway.png" className="photographyImg" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-md-offset-6">
          <br/>
          <span style={{fontSize:"36px"}}> {'}'}</span>
        </div>
      </div>
    </div>

  )
}

export default Photography;
