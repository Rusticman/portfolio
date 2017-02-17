import React from 'react';

const Portfolio = () =>{

  return(

    <div className="portfolioContainer container-fluid">
      <div className="webPageWrapper row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">
          <h1 className="portfolioHeader">
            <img src="../../style/img/icons/suitcase.png" className="suitcaseImg" />portfolio {'{'}
          </h1>
          <br/>
          <div id="portfolioNote">*please wait a moment for apps to wake up from sleep when visiting...</div>
          <br/>
       </div>
      </div>
      <div className="webPageWrapper row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-1">
          <img src="../../style/img/web_profiles/nightlife.png" className="webProfileImg" />
        </div>
        <div className="appInfo col-xs-12 col-sm-12 col-md-3">
            <h3>Howl At  The Moon</h3>
            <div>A full stack app with facebook and twitter log in which enables you to find
              a bar or restaurant in any location, and confirm your attendance.
            </div>
            <a target="_blank" href="https://nightlife-rustic.herokuapp.com/">visit</a>
        </div>
      </div>
      <div className="webPageWrapper row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-1">
          <img src="../../style/img/web_profiles/book-trade.png" className="webProfileImg" />
        </div>
        <div className="appInfo col-xs-12 col-sm-12 col-md-3">
          <h3>Book Trading Forum</h3>
          <div>A full stack app with facebook and twitter log in which allows you to trade books with other
            users.
          </div>
          <a target="_blank" href="http://book-trade-rustic.herokuapp.com/">visit</a>
        </div>
      </div>
      <div className="webPageWrapper row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-1">
          <img src="../../style/img/web_profiles/picture-board.png" className="webProfileImg" />
        </div>
        <div className="appInfo col-xs-12 col-sm-12 col-md-3">
          <h3>Picture Board</h3>
          <div>A full stack app with facebook and twitter log in which enables you to add
          whatever pictures you'd like to the board.
          </div>
          <a target="_blank" href="https://pictureboard-rustic.herokuapp.com/">visit</a>
        </div>
      </div>
      <div className="webPageWrapper row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-1">
          <img src="../../style/img/web_profiles/vote.png" className="webProfileImg" />
        </div>
        <div className="appInfo col-xs-12 col-sm-12 col-md-3">
          <h3>Vote</h3>
          <div>A full stack app with facebook and twitter log in which enables
           you to create your own questions for users to vote upon.
          </div>
          <a target="_blank" href="https://vote-rustic-client.herokuapp.com/">visit</a>
        </div>
      </div>
      <div className="webPageWrapper row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-1">
          <img src="../../style/img/web_profiles/stockmarket.png" className="webProfileImg" />
        </div>
        <div className="appInfo col-xs-12 col-sm-12 col-md-3">
          <h3>Stock Check</h3>
          <div>A full stack app which enables the user to check the stock value of a company
            using their stock symbol.
          </div>
          <a target="_blank" href="https://stock-rustic.herokuapp.com/">visit</a>
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-md-offset-7">
          <span style={{fontSize:"36px"}}> {'}'}</span>
        </div>
      </div>
    </div>


  )
}

export default Portfolio;
