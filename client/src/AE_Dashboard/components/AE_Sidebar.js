import React from "react";
import { useState } from "react";
import "../../css/Sidebar.css";
import "../../css/responsive.css";
import Logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/routerContext";
import { useContext } from "react";
const Sidebar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [isExpended, setExpendState] = useState(false);
  return (
    <div className={isExpended ? "side-nav-container" : "side-nav-container side-nav-container-NX"} >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpended && (
            <div className="nav-brand">
              <img
                src={Logo}
                className="logo"
                alt="logo"
              />
            </div>
          )}
            {<button
              className={
                isExpended ? "hamburger hamburger-in" : "hamburger hamburger-out"
              }
              onClick={() => setExpendState(!isExpended)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>}
        </div>
      </div>
        <nav>
          <ul className="menu-aside">
            <li className="menu-item">
              <NavLink
                activeClassName="is-active"
                className="menu-link"
                to="/AE_Dashboard1"
                exact={true}
              >
                <i className="icon fas fa-home"></i>
                <span className="text">Home</span>
              </NavLink>
            </li>

            {/* <li className="menu-item">
                        <NavLink
                          activeClassName="active"
                          className="menu-link"
                          to="/SubstationCyclePage"
                          exact={true}
                        >
                            <i className="icon fas fa-user"></i>
                            <span className="text">Substation Cycle Entry</span>
                        </NavLink>
                       </li> */}

            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/SubstationReadingPage"
                exact={true}
              >
                <i className="icon fa fa-cog"></i>
                <span className="text">Substation Reading Entry</span>
              </NavLink>
            </li>

            {/* <li className="menu-item">
                        <NavLink
                          activeClassName="active"
                          className="menu-link"
                          to="/FeederCyclePage"
                          exact={true}
                        >
                            <i className="icon fa fa-cog"></i>
                            <span className="text">Feeder Cycle Entry</span>
                        </NavLink>
                       </li> */}

            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/FeederReadingPage"
                exact={true}
              >
                <i className="icon fa fa-cog"></i>
                <span className="text">Feeder Reading Entry</span>
              </NavLink>
            </li>

            {/* <li className="menu-item">
                        <NavLink
                          activeClassName="active"
                          className="menu-link"
                          to="/TransformerCyclePage"
                          exact={true}
                        >
                            <i className="icon fa fa-cog"></i>
                            <span className="text">Transformer Cycle Entry</span>
                        </NavLink>
                       </li> */}

            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/TransformerReadingPage"
                exact={true}
              >
                <i className="icon fa fa-cog"></i>
                <span className="text">Transformer Reading Entry</span>
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/AE_MonthlyReport"
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
                to="/AE_YearlyReport"
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
                {currentUser && (
                  <span onClick={logout} className="text">
                    Logout
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
          <br />
          <br />
        </nav>
      </div>
      );
}

      export default Sidebar;
