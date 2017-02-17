import React from 'react';

const Sidebar = (props) =>{

  const {activateSidebar, aboutSidebar, portfolioSidebar, photographySidebar,
  contactColour, photographyColour, portfolioColour, aboutColour, activateMenuColour} = props;


const menuScroll =  (ev) => {
  const aboutMe = document.querySelector('.aboutMeContainer').clientHeight ||
                  document.querySelector('.aboutMeContainer').offsetHeight;
  const portfolio = document.querySelector('.portfolioContainer').clientHeight ||
                    document.querySelector('.portfolioContainer').offsetHeight;
  const photography = document.querySelector('.photographyContainer').clientHeight ||
                      document.querySelector('.photographyContainer').offsetHeight;
                    
  const offset = 250;

    if((window.pageYOffset + offset) < aboutMe){
      activateSidebar("about");
      activateMenuColour("about");
    }
    else if((window.pageYOffset + offset) < (aboutMe + portfolio) && (aboutMe - offset) < window.pageYOffset){
      activateSidebar("portfolio");
      activateMenuColour("portfolio");
    }
    else if(window.pageYOffset > (portfolio + photography)){
      activateMenuColour("contact");
    }
    else if(window.pageYOffset < (aboutMe + portfolio + photography) && (portfolio + aboutMe - offset) < window.pageYOffset){
      activateSidebar("photography");
      activateMenuColour("photography");
    }

};

window.onscroll= menuScroll;

  return(

      <nav className="menu">
        <div className={"menu-link " + aboutSidebar}>
          <div className="buffer">
            <a href="#aboutMeContainer" className="about menu-item" >
              <span className={"title " + aboutColour}>about</span>
            </a>
          </div>
        </div>
        <div className={"menu-link " + portfolioSidebar}>
          <div className="buffer">
            <a href="#portfolioContainer" className="portfolio menu-item">
              <span className={"title " + portfolioColour}>portfolio</span>
            </a>
          </div>
        </div>
        <div className={"menu-link " + photographySidebar}>
          <div className="buffer">
            <a href="#photographyContainer" className="photography menu-item">
              <span className={"title " + photographyColour}>photography</span>
            </a>
          </div>
        </div>
        <div className="menu-link">
          <div className="buffer">
            <a href="#contactContainer" className="contact menu-item">
              <span className={"title " + contactColour}>contact me</span>
            </a>
          </div>
        </div>
      </nav>
  )
}

export default Sidebar;
