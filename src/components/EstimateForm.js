import React from "react";
import { Form, Button } from 'react-bootstrap';

const EstimateForm = (props) => {

  return (
    <div className="form-wrapper">
      <Form onSubmit={(props.onSubmit)}>
        <header>Form data</header>
        <Form.Group controlId="data-population">
          <Form.Label>Population</Form.Label>
          <Form.Control type="number" data-population={props.population} value={props.population} onChange={(e)=>props.setPopulation(e.target.value)} placeholder="90000000" min="1"  required/>
        </Form.Group>

        <Form.Group controlId="data-time-to-elapse">
          <Form.Label>Time To Elapse</Form.Label>
          <Form.Control type="number" data-time-to-elapse={props.timeToElapse} value={props.timeToElapse} onChange={(e)=>props.setTimeToElapse(e.target.value)} placeholder="56" min="1"  required/>
        </Form.Group>

        <Form.Group controlId="data-reported-cases">
          <Form.Label>Reported Cases</Form.Label>
          <Form.Control type="number" data-reported-cases={props.reportedCases} value={props.reportedCases} onChange={(e)=>props.setReportedCases(e.target.value)} placeholder="400000" min="1"  required/>
        </Form.Group>

        <Form.Group controlId="data-total-hospital-beds">
          <Form.Label>Total Hospital Beds</Form.Label>
          <Form.Control type="number" data-total-hospital-beds={props.totalHospitalBeds} value={props.totalHospitalBeds} onChange={(e)=>props.setTotalHospitalBeds(e.target.value)} placeholder="90000" min="1"  required/>
        </Form.Group>

        <Form.Group controlId="data-period-type">
          <Form.Label>Period Type</Form.Label>
          <Form.Control as="select" data-period-type={props.periodType} value={props.periodType} onChange={(e) =>props.setPeriodType(e.target.value)}>
            <option value='days'>Days</option>
            <option value='weeks'>Weeks</option>
            <option value='months'>Months</option>
          </Form.Control>
        </Form.Group>

        <Button data-go-estimate={props.data} variant="info" size="lg" block="block" type="submit">
          Go Estimate
        </Button>
      </Form> 
    </div>
    );
}

export default EstimateForm;