import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Navbar
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
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
    console.log(data);
  };

  return (
    <Router>
    <div className="App">
      <header className="App-header" style={{ backgroundColor: 'transparent',height:'80px',border: '1px solid lightskyblue',boxShadow: '1px 1px 10px 0px grey'}} >
        <Navbar variant="light">
          <Container style={{maxWidth: '800'}}>
            <Navbar.Brand>
              <Link style={{color: '#007bff'}}  to={"/"} className="nav-link">
                Covid19 Estimator
              </Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>

      <Container style={{display:'flex'}}>
        <Row style={{display:'flex', flexWrap: 'noWrap'}}>
          <Col md={12} style={{display: 'flex', flexGrow: '0', flexShrink: '0', flexBasis: '350px'}}>
              <div className="wrapper" style={{width:'-webkit-fill-available'}}>
                <EstimateForm
                  population={population}
                  timeToElapse={timeToElapse}
                  reportedCases={reportedCases}
                  totalHospitalBeds={totalHospitalBeds}
                  periodType={periodType}
                  onSubmit={onSubmit} data={data}
                  setPopulation={setPopulation}
                  setTimeToElapse={setTimeToElapse}
                  setReportedCases={setReportedCases}
                  setTotalHospitalBeds={setTotalHospitalBeds}
                  setPeriodType={setPeriodType}
                />    
            </div>
            </Col>
            <Col md={12} style={{display: 'flex', flexGrow: '0', flexShrink: '0', flexBasis: '570px'}}>
              <div className="wrapper" style={{width:'-webkit-fill-available'}}>
                <EstimatedInfo
                  data={data}
                />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>
  );
}

export default App;