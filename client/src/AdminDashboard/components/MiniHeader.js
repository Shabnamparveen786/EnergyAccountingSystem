import React from "react";
import "./../../css/MiniHeader.css";
import "./../../css/Sidebar.css";
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

import { AuthContext } from "../../context/routerContext";
import { useContext } from "react";
const MiniHeader = () => {
  // useEffect(() => {
  //   $("[data-trigger]").on("click", function (e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     var offcanvas_id = $(this).after("data-trigger");
  //     $(offcanvas_id).toggleClass("show");
  //   });
  // });

  // $(".btn-aside-minimize").on("click", function () {
  //   if (window.innerWidth < 768) {
  //     $("body").removeClass("aside-mini");
  //     $(".navbar-aside").removeClass("show");
  //   } else {
  //     $("body").toggleClass("aside-mini");
  //   }
  // });

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  // const [userId, setUserId] = useState("");
  // setUserId(currentUser.user_id);
  // console.log(userId);

  return (
    <div className="mini-header">
      <div className="header-mini">
        <h4>
          Welcome user: <span>{currentUser?.name}</span>
        </h4>
      </div>
      <div className="user">
        <h4> You are logged in as: <span> {currentUser?.role}</span></h4>
      </div>
    </div>
  );
};

export default MiniHeader;
