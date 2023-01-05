import React from "react";
import { useState } from "react";
import "./../../css/Sidebar.css";
import "./../../css/responsive.css";
import Logo from "./../../images/logo.png";
import {  NavLink} from "react-router-dom";

const Sidebar = () => {
  const [isExpended, setExpendState] = useState(false);
    return (
      <div className={isExpended ? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
      <div className="nav-upper">
				<div className="nav-heading">
            {isExpended && (
              <div className="nav-brand">
                     <img 
                        src={Logo}
                        // style={{ height: "50px"}}
                        className="logo"
                        alt="logo"
                      />
             </div>
            )}
			{/* <div className="nav-upper">
				<div className="nav-heading">

         <div>
            <aside className="navbar-aside" id="offcanvas_aside">
                <div className = "aside-top">
                   <Link to="/" className="brand-wrap">
                      <img 
                        src={Logo}
                        style={{ height: "50px"}}
                        className="logo"
                        alt="logo"
                      />
                   </Link>
                   <div> */}
                        { <button 
                         className={
                              isExpended ? "hamburger hamburger-in" : "hamburger hamburger-out"
                              }
                             onClick={() => setExpendState(!isExpended)}
                              >
                                <span></span>
                                <span></span>
                                <span></span>
                              </button> }

                      {/* { <button className="hamburger btn-icon btn-aside-minimize">
                        <i className="text-muted fas fa-stream"></i>
                      </button> } */}
                </div>
          </div>

                <nav>
                    <ul className="menu-aside">
                       <li className="menu-item">
                        <NavLink
                          
                          activeClassName="is-active"
                          className="menu-link"
                          to="/Dashboard"
                          exact={true}
                        >
                            <i className="icon fas fa-home"></i>
                            <span className="text">Dashboard</span>
                        </NavLink>
                       </li>

                       <li className="menu-item">
                        <NavLink
                          activeClassName="active"
                          className="menu-link"
                          to="/UserDetails"
                          exact={true}
                        >
                            <i className="icon fas fa-user"></i>
                            <span className="text">Create User</span>
                        </NavLink>
                       </li>

                       <li className="menu-item">
                        <NavLink
                          activeClassName="active"
                          className="menu-link"
                          to="/SubstationCreation"
                          exact={true}
                        >
                            <i className="icon fa fa-cog"></i>
                            <span className="text">Substation Creation</span>
                        </NavLink>
                       </li>

                       <li className="menu-item">
                        <NavLink
                          activeClassName="active"
                          className="menu-link"
                          to="/FeederCreation"
                          exact={true}
                        >
                            <i className="icon fa fa-cog"></i>
                            <span className="text">Feeder Creation</span>
                        </NavLink>
                       </li>

                       <li className="menu-item">
                        <NavLink
                          activeClassName="active"
                          className="menu-link"
                          to="/TransformerCreation"
                          exact={true}
                        >
                            <i className="icon fa fa-cog"></i>
                            <span className="text">Transformer Creation</span>
                        </NavLink>
                       </li>

                       <li className="menu-item">
                        <NavLink
                          activeClassName="active"
                          className="menu-link"
                          to="/"
                          exact={true}
                        >
                            <i className="icon fa fa-solid fa-file"></i>
                            <span className="text">Monthly Report </span>
                        </NavLink>
                       </li>

                       <li className="menu-item">
                        <NavLink
                          activeClassName="active"
                          className="menu-link"
                          to="/"
                          exact={true}
                        >
                            <i className="icon fa fa-solid fa-file"></i>
                            <span className="text">Yearly Report</span>
                        </NavLink>
                       </li>

                       <li className="menu-item">
                        <NavLink
                          activeClassName="active"
                          className="menu-link"
                          to="/"
                          exact={true}
                        >
                            <i className="icon fa fa-sharp fa-solid fa-key"></i>
                            <span className="text">Update Password</span>
                        </NavLink>
                       </li>

                       <li className="menu-item">
                        <NavLink
                          activeClassName="active"
                          className="menu-link"
                          to="/"
                          exact={true}
                        >
                            <i className="icon fa fa-solid fa-right-from-bracket"></i>
                            <span className="text">Logout</span>
                        </NavLink>
                       </li>

                    </ul>
                    <br />
                    <br />
                </nav>
        {/* //     </aside> */}
        </div>
      
    );
}

export default Sidebar;

// import React, { useState } from "react";
// // import "./Sidebar.css";
// import "./../../css/Sidebar.css";

// const Sidebar = () => {
// 	const [isExpanded, setExpendState] = useState(false);
// 	const menuItems = [
// 		{
// 			text: "Dashboard",
// 			icon: "icons/grid.svg",
// 		},
// 		{
// 			text: "Create User",
// 			icon: "icons/user.svg",
// 		},
// 		{
// 			text: "Substation Creation",
// 			icon: "icons/message.svg",
// 		},
// 		{
// 			text: "Feeder Creation",
// 			icon: "icons/pie-chart.svg",
// 		},
// 		{
// 			text: "Transformer Creation",
// 			icon: "icons/folder.svg",
// 		},
// 		{
// 			text: "Monthly Report",
// 			icon: "icons/shopping-cart.svg",
// 		},
// 		{
// 			text: "Yearly Report",
// 			icon: "icons/heart.svg",
// 		},
// 		// {
// 		// 	text: "Settings",
// 		// 	icon: "icons/settings.svg",
// 		// },
// 	];
// 	return (
// 		<div
// 			className={
// 				isExpanded
// 					? "side-nav-container"
// 					: "side-nav-container side-nav-container-NX"
// 			}
// 		>
// 			<div className="nav-upper">
// 				<div className="nav-heading">
// 					{isExpanded && (
// 						{/* <div className="nav-brand">
// 							<img src="icons/Logo.svg" alt="" srcset="" />
// 							<h2>Showkart</h2>
// 						</div> */}
// 					)}
// 					<button
// 						className={
// 							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
// 						}
// 						onClick={() => setExpendState(!isExpanded)}
// 					>
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 					</button>
// 				</div>
// 				<div className="nav-menu">
// 					{menuItems.map(({ text, icon }) => (
// 						<a
// 							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
// 							href="#"
// 						>
// 							<img className="menu-item-icon" src={icon} alt="" srcset="" />
// 							{isExpanded && <p>{text}</p>}
// 						</a>
// 					))}
// 				</div>
// 			</div>
// 			{/* <div className="nav-footer">
// 				{isExpanded && ( */}
// 					{/* <div className="nav-details"> */}
// 						{/* <img
// 							className="nav-footer-avatar"
// 							src="icons/admin-avatar.svg"
// 							alt=""
// 							srcset=""
// 						/> */}
// 						{/* <div className="nav-footer-info">
// 							<p className="nav-footer-user-name">M Showkat</p>
// 							<p className="nav-footer-user-position">store admin</p>
// 						</div> */}
// 					{/* </div> */}
// 				{/* )} */}
// 				{/* <img className="logout-icon" src="icons/logout.svg" alt="" srcset="" /> */}
// 			{/* </div> */}
		// </div>
// 	);
// };

// export default Sidebar;