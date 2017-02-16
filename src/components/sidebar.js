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

    <nav className="menu"><a href="#work-section" className={"about menu-item " + aboutSidebar}>
        <div className="menu-link"><span className={"title " + aboutColour}>about</span>
      </div></a><a href="#portfolioContainer" className={"portfolio menu-item " + portfolioSidebar}>
        <div className="menu-link"><span className={"title " + portfolioColour}>portfolio</span>
      </div></a><a href="#photographyContainer" className={"contact menu-item " + photographySidebar}>
        <div className="menu-link"><span className={"title " + photographyColour}>photography</span>
      </div></a><a href="#contactContainer" className="contact menu-item">
        <div className="menu-link"><span className={"title " + contactColour}>contact me</span>
                        </div></a></nav>
  )
}

export default Sidebar;
