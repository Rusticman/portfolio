import React from 'react';

const Sidebar = (props) =>{

  const {activateSidebar, aboutSidebar, portfolioSidebar, photographySidebar,
  contactColour, photographyColour, portfolioColour, aboutColour, activateMenuColour} = props;


const menuScroll =  (ev) => {
    if(window.pageYOffset > 0 && window.pageYOffset < 444){
      activateSidebar("about");
      activateMenuColour("about");
    }
    if(window.pageYOffset > 444 && window.pageYOffset < 1692){
      activateSidebar("portfolio");
      activateMenuColour("portfolio");
    }
    if(window.pageYOffset > 1792 && window.pageYOffset < 2200){
      activateSidebar("photography");
      activateMenuColour("photography");
    }
    if(window.pageYOffset > 2270){
      activateMenuColour("contact");
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
            <a href="#photographyContainer" className="contact menu-item">
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
