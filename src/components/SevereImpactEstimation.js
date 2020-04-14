import React from 'react';
import { Table } from 'react-bootstrap';

const SevereImpactEstimation = (props) => {
    const severeImpact_data = props.severeImpact_data;
    const currentlyInfected = severeImpact_data.reportedCases * 50;
    const infectionsByRequestedTime = Math.trunc(currentlyInfected * props.normalizePeriod(severeImpact_data.periodType, severeImpact_data.timeToElapse));
    const severeCasesByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.15);
    const hospitalBedsByRequestedTime = Math.trunc(severeImpact_data.totalHospitalBeds - severeCasesByRequestedTime);
    const casesForICUByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.05);
    const casesForVentilatorsByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.02);
    return (
        <>
            <h2>Severe Impact Estimation</h2>
            <Table striped bordered hover>
            <thead>
            <tr>
                <th>Currently Infected</th>
                <th>Infections By Requested Time</th>
                <th>Severe Cases By Requested Time</th>
                <th>Hospital Beds By Requested Time</th>
                <th>Cases For ICU By Requested Time</th>
                <th>Cases For Ventilators By Requested Time</th>
            </tr>
            </thead>
            <tbody>
            {Object.keys(severeImpact_data).length > 0 ? (
                <tr>
                    <td>{currentlyInfected}</td>
                    <td>{infectionsByRequestedTime}</td>
                    <td>{severeCasesByRequestedTime}</td>
                    <td>{hospitalBedsByRequestedTime}</td>
                    <td>{casesForICUByRequestedTime}</td>
                    <td>{casesForVentilatorsByRequestedTime}</td>
                </tr>
            ) : (
                <tr>
                <td colSpan={3}>No Data</td>
                </tr>
            )}
            </tbody>
        </Table>
        </>
    );
}

export default SevereImpactEstimation;