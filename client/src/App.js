import Login from "./Login";
import Dashboard from "./AdminDashboard/components/Dashboard";

import UserDetailsPage from "./AdminDashboard/screens/UserDetailsPage";
import "./App.css";
import SubstationPage from "./AdminDashboard/screens/SubstationPage";
import FeederPage from "./AdminDashboard/screens/FeederPage";
import TransformerPage from "./AdminDashboard/screens/TransformerPage";
// import MonthlyReport from "./AdminDashboard/screens/MonthlyReport";

import MonthlyReportScreen from "./AdminDashboard/screens/MonthlyReportScreen";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import SubstationReport from "./AdminDashboard/screens/SubstationReport";
import SubstationReportPage from "./AdminDashboard/screens/SubstationReportPage";

import AE_Dashboard1 from "./AE_Dashboard/components/AE_Dashboard1";
// import SubstationCycle from "./AE_Dashboard/screens/SubstationCycle";
import SubstationReading from "./AE_Dashboard/screens/SubstationReading";
// import FeederCycle from "./AE_Dashboard/screens/FeederCycle";
import FeederReading from "./AE_Dashboard/screens/FeederReading";
// import TransformerCycle from "./AE_Dashboard/screens/TransformerCycle";
import TransformerReading from "./AE_Dashboard/screens/TransformerReading";
import AE_MonthlyReportScreen from "./AE_Dashboard/screens/AE_MonthlyReportScreen";
import SubstationReadingScreen from "./AE_Dashboard/screens/SubstationReadingScreen";
// import AE_YearlyReport from "./AE_Dashboard/AE_Pages/AE_YearlyReport";
import AE_YearlyReportScreen from "./AE_Dashboard/screens/AE_YearlyReportScreen";
import SubstationReportScreen from "./AE_Dashboard/screens/SubstationYearlyScreen";
import FeederYearlyScreen from "./AE_Dashboard/screens/FeederYearlyScreen";
import DtYearlyScreen from "./AE_Dashboard/screens/DtYearlyScreen";
import TableScreen from "./AE_Dashboard/screens/TableScreen";
import FeederTableScreen from "./AE_Dashboard/screens/FeederTableScreen";
import TransformerTableScreen from "./AE_Dashboard/screens/TransformerTableScreen";
import MonthlySubstationTableScreen from "./AE_Dashboard/screens/MonthlySubstationTableScreen";
import FeederReadingScreen from "./AE_Dashboard/screens/FeederReadingScreen";
import MonthlyFeederTableScreen from "./AE_Dashboard/screens/MonthlyFeederTableScreen";
import DtMonthlyReportScreen from "./AE_Dashboard/screens/DtMonthlyReportScreen";
import MonthlyTransformerTableScreen from "./AE_Dashboard/screens/MonthlyTransformerTableScreen";
import SubstationMonthlyChartScreen from "./AE_Dashboard/screens/SubstationMonthlyChartScreen";

import SubstationYearlyChartScreen from "./AE_Dashboard/screens/SubstationYearlyChartScreen";
import FeederYearlyChartScreen from "./AE_Dashboard/screens/FeederYearlyChartScreen";
import FeederMonthlyChartScreen from "./AE_Dashboard/screens/FeederMonthlyChartScreen";
import TransformerYearlyChartScreen from "./AE_Dashboard/screens/TransformerYearlyChartScreen";

// import Login from ".AdminDashboard/Login";
function App() {
  return (
    <>
      {/* <SubstationPage /> */}
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userDetails" element={<UserDetailsPage />} />
          <Route path="/substationCreation" element={<SubstationPage />} />
          <Route path="/transformerCreation" element={<TransformerPage />} />
          <Route path="/admin" element={<Login />} />

          <Route path="/feederCreation" element={<FeederPage />} />
          <Route path="/monthlyReport" element={<MonthlyReportScreen />} />
          <Route path="/SubstationReport" element={<SubstationReportPage />} />
          <Route path="/AE_Dashboard1" element={<AE_Dashboard1 />} />

          <Route
            path="/SubstationReadingPage"
            element={<SubstationReading />}
          />
          <Route path="/FeederReadingPage" element={<FeederReading />} />

          <Route
            path="/TransformerReadingPage"
            element={<TransformerReading />}
          />

          <Route
            path="/AE_MonthlyReport"
            element={<AE_MonthlyReportScreen />}
          />
          <Route
            path="/SubstationMonthlyReport"
            element={<SubstationReadingScreen />}
          />
          <Route path="/AE_YearlyReport" element={<AE_YearlyReportScreen />} />
          <Route
            path="/SubstationYearlyReport"
            element={<SubstationReportScreen />}
          />

          <Route path="/FeederYearlyReport" element={<FeederYearlyScreen />} />

          <Route path="/DtYearlyReport" element={<DtYearlyScreen />} />

          <Route path="/TablePage" element={<TableScreen />} />
          <Route
            path="/FeederTablePage"
            element={<FeederTableScreen />}
          ></Route>
          <Route
            path="/TransformerTablePage"
            element={<TransformerTableScreen />}
          ></Route>
          <Route
            path="/MonthlySubstationTablePage"
            element={<MonthlySubstationTableScreen />}
          ></Route>
          <Route
            path="/FeederMonthlyReport"
            element={<FeederReadingScreen />}
          ></Route>
          <Route
            path="/MonthlyFeederTablePage"
            element={<MonthlyFeederTableScreen />}
          ></Route>
          <Route
            path="/DtMonthlyReport"
            element={<DtMonthlyReportScreen />}
          ></Route>
          <Route
            path="/MonthlyTransformerTablePage"
            element={<MonthlyTransformerTableScreen />}
          ></Route>
          <Route
            path="/SubstationMonthlyChartReport"
            element={<SubstationMonthlyChartScreen />}
          ></Route>
          <Route
            path="/SubstationYearlyChartReport"
            element={<SubstationYearlyChartScreen />}
          ></Route>
          <Route
            path="/FeederYearlyChartReport"
            element={<FeederYearlyChartScreen />}
          ></Route>
          <Route
            path="/FeederMonthlyChartReport"
            element={<FeederMonthlyChartScreen />}
          ></Route>
          <Route
            path="/TransformerYearlyChartReport"
            element={<TransformerYearlyChartScreen />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
