import React from 'react';

const ImpactEstimation = (props) => {
    const impact_data = props.impact_data;
    const currentlyInfected = impact_data.reportedCases * 10;
    const infectionsByRequestedTime = Math.trunc(currentlyInfected * props.normalizePeriod(impact_data.periodType, impact_data.timeToElapse));
    const severeCasesByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.15);
    const hospitalBedsByRequestedTime = Math.trunc(impact_data.totalHospitalBeds - severeCasesByRequestedTime);
    const casesForICUByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.05);
    const casesForVentilatorsByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.02);
    return (
        <>
            <h2>Impact Estimation</h2>
            <table striped bordered hover>
            <tr>
                <th>Currently Infected</th>
                <th>Infections By Requested Time</th>
                <th>Severe Cases By Requested Time</th>
                <th>Hospital Beds By Requested Time</th>
                <th>Cases For ICU By Requested Time</th>
                <th>Cases For Ventilators By Requested Time</th>
            </tr>
            {Object.keys(impact_data).length > 0 ? (
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
            
        </table>
        </>
    );
}

export default ImpactEstimation;