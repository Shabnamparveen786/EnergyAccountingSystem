import React, { useContext } from "react";
import "../../css/report.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/routerContext";
import { useNavigate } from "react-router-dom";

function AE_MonthlyReport() {
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  const onClick = async (e) => {
    e.preventDefault();
    if (currentUser.role === "AE" ) {
      navigate("/SubstationMonthlyReport");
    } else {
      alert("Unauthorized User");
    }
  };
  const fun1 = async (e) => {
    e.preventDefault();
    if (currentUser.role === "JE") {
      navigate("/FeederMonthlyReport");
    } else {
      alert("Unauthorized User");
    }
  };

  const fun2 = async (e) => {
    e.preventDefault();
    if (currentUser.role === "EEE") {
      navigate("/DtMonthlyReport");
    } else {
      alert("Unauthorized User");
    }
  };

  return (
    <div className="container2">
      <div className="title2"> Monthly Report </div>
      <form>
        <div className="ui-divider"></div>

        <div className="btn-group">
          {/* if(currentUser.role === "AE"){ */}
          <Link to="/SubstationMonthlyReport">
            <button type="button" name="Substation" onClick={onClick}>
              Substation
            </button>
          </Link>
          {/* } */}
          {/* else if(currentUser.role === "JEE"){ */}
          <Link to="/FeederMonthlyReport">
            <button type="button" name="Feeder" onClick={fun1}>
              Feeder
            </button>
          </Link>
          {/* } */}

          {/* else if(currentUser.role === "EEE"){ */}
          <Link to="/DtMonthlyReport">
            <button type="button" name="Transformer" onClick={fun2}>
              Transformer
            </button>
          </Link>
          {/* } */}

          {/* else{
        alert("you are not user")
      } */}
        </div>
      </form>
    </div>
  );
}

export default AE_MonthlyReport;
