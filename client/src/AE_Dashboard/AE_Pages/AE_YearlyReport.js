import React, { useContext } from "react";
import "../../css/report.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/routerContext";
import { useNavigate } from "react-router-dom";

const AE_YearlyReport = () => {
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  const onClick = async (e) => {
    e.preventDefault();
    if (currentUser.role === "AE") {
      navigate("/SubstationYearlyReport");
    } else {
      alert("Unauthorized User");
    }
  };
  const fun1 = async (e) => {
    e.preventDefault();
    if (currentUser.role === "JE") {
      navigate("/FeederYearlyReport");
    } else {
      alert("Unauthorized User");
    }
  };

  const fun2 = async (e) => {
    e.preventDefault();
    if (currentUser.role === "EEE") {
      navigate("/DtYearlyReport");
    } else {
      alert("Unauthorized User");
    }
  };
  return (
    <div className="container2">
      <div className="title2"> Yearly Report </div>
      <form>
        <div className="ui-divider"></div>

        <div className="btn-group">
          <Link to="/SubstationReport">
            <button type="button" name="Substation" onClick={onClick}>
              Substation
            </button>
          </Link>

          <Link to="/">
            <button type="button" name="Feeder" onClick={fun1}>
              Feeder
            </button>
          </Link>

          <Link to="/">
            <button type="button" name="Transformer" onClick={fun2}>
              Transformer
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AE_YearlyReport;
