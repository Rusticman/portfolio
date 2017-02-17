import React from 'react';

const Photography = () =>{

  return(

    <div id="photographyContainer">
          <h1><img src="../../style/img/icons/camera.png"/>  photography {'{'} </h1>
          <br/>
          <div className="container-fluid" id="photographyWrapper">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <img src="../../style/img/photography/chairs.png" className="photographyImg" />
              </div>
              <div className="col-sm-12 col-md-6">
                <img src="../../style/img/photography/monks.png" className="photographyImg" />
              </div>
              <div className="col-sm-12 col-md-6">
                <img src="../../style/img/photography/night-sky.jpg" className="photographyImg" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <img src="../../style/img/photography/sunset.png" className="photographyImg" />
              </div>
              <div className="col-sm-12 col-md-6">
                <img src="../../style/img/photography/umbrella-boys.jpg" className="photographyImg" />
              </div>
              <div className="col-sm-12 col-md-6">
                <img src="../../style/img/photography/walkway.png" className="photographyImg" />
              </div>
            </div>
          </div>
          <br/>
          <span> {'}'}</span>
    </div>

  )
}

export default Photography;
