import React from "react";
import "../../css/Header.css";
import $ from "jquery";
import "../../css/Sidebar.css";
import {useEffect} from 'react';
// import Sidebar from "./Sidebar";

import "../../css/responsive.css";


const Header = () => {

  useEffect(() => {
    $("[data-trigger]").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var offcanvas_id = $(this).after("data-trigger");
      $(offcanvas_id).toggleClass("show");
    })

$(".btn-aside-minimize").on("click", function () {
if (window.innerWidth < 768) {
  $("body").removeClass("aside-mini");
  $(".navbar-aside").removeClass("show");
} else {
  $("body").toggleClass("aside-mini");
}
});
}, []);

return (
    <header className="main-header">
        <div className="d-flex">
        {/* <div className="p-2 flex-shrink-1">
        <img 
          src="./../images/NBPDCL_logo.png"
          style={{height:"40"}}
          className="logo"
          alt="Electricity logo"
        /></div> */}
        <div className="p-2 w-100"><h2>North Bihar Power Distribution Company Ltd.</h2></div>
        </div>
        
    </header>
  
);
};

export default Header;