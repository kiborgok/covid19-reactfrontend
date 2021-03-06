import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Link } from "react-router-dom";
import EstimateForm from "./components/EstimateForm";
import EstimatedInfo from "./components/EstimatedInfo";

function App() {

  const [population, setPopulation] = useState(47000000);
  const [timeToElapse, setTimeToElapse] = useState(28);
  const [reportedCases, setReportedCases] = useState(1760);
  const [totalHospitalBeds, setTotalHospitalBeds] = useState(70000);
  const [periodType, setPeriodType] = useState('days');

  const [data, setData] = useState({
    population: population,
    timeToElapse: timeToElapse,
    reportedCases: reportedCases,
    totalHospitalBeds: totalHospitalBeds,
    periodType:periodType
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setData({ population, timeToElapse, reportedCases, totalHospitalBeds, periodType });
  };

  return (
    <Router>
    <div className="App">
      <header className="App-header" >
          <Link to={"/"} style={{color: '#007bff'}}>
            Covid19 Estimator
          </Link>
      </header>

        <div>
          <table>
              <div className="wrapper">
              <EstimateForm
                  data={data}
                  population={population}
                  timeToElapse={timeToElapse}
                  reportedCases={reportedCases}
                  totalHospitalBeds={totalHospitalBeds}
                  periodType={periodType}
                  onSubmit={onSubmit}
                  setPopulation={setPopulation}
                  setTimeToElapse={setTimeToElapse}
                  setReportedCases={setReportedCases}
                  setTotalHospitalBeds={setTotalHospitalBeds}
                  setPeriodType={setPeriodType}
                />    
            </div>
            
            
              <div className="wrapper">
                <EstimatedInfo
                  data={data}
                />
            </div>
            </table>
      </div>
    </div>
  </Router>
  );
}

export default App;