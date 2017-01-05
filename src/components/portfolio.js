import React from 'react';

const Portfolio = () =>{

  return(

    <div id="portfolioContainer">
          <h1><img src="../../style/img/icons/suitcase.png" />portfolio {'{'} </h1>
          <br/>
            <div className="webProfileWrappers">
              <img src="../../style/img/web_profiles/nightlife.png" className="webProfileImg" />
              <h3>Howl At  The Moon</h3>
              <div>A full stack app with facebook and twitter log in which enables you to find
              a bar or restaurant in any location, and confirm your attendance.</div>
              <a href="https://nightlife-rustic.herokuapp.com/">visit</a>
            </div>
            <div className="webProfileWrappers">
              <img src="../../style/img/web_profiles/book-trade.png" className="webProfileImg" />
              <h3>Book Trading Forum</h3><br/>
              <div>A full stack app with facebook and twitter log in which allows you to trade books with other
               users.</div>
              <a href="http://book-trade-rustic.herokuapp.com/">visit</a>
            </div>
            <div className="webProfileWrappers">
              <img src="../../style/img/web_profiles/picture-board.png" className="webProfileImg" />
              <h3>Picture Board</h3>
              <div>A full stack app with facebook and twitter log in which enables you to add
              whatever pictures you'd like to the board.</div>
              <a href="https://pictureboard-rustic.herokuapp.com/">visit</a>
            </div>
            <div className="webProfileWrappers">
              <img src="../../style/img/web_profiles/vote.png" className="webProfileImg" />
              <h3>Vote</h3>
              <div>A full stack app with facebook and twitter log in which enables
               you to create your own questions for users to vote upon.</div>
              <a href="https://vote-rustic-client.herokuapp.com/">visit</a>
            </div>
          <br/>
       <span> {'}'}</span>
    </div>

  )
}

export default Portfolio;
  
