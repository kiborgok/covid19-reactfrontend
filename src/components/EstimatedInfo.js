import React from 'react';
import ImpactEstimation from './ImpactEstimation';
import SevereImpactEstimation from './SevereImpactEstimation';

const EstimatedInfo = (props) => {
    const covid_data = props.data;

    const normalizePeriod = (period, timeToElapse) => {
      let timeToElaps = 2 ** Math.trunc(timeToElapse / 3);
      const weeksInDays = timeToElapse * 7;
      const monthsInDays = timeToElapse * 30;
      switch (period) {
        case 'days':
          return timeToElaps;
        case 'weeks':
          timeToElaps = 2 ** Math.trunc(weeksInDays / 3);
          return timeToElaps;
        case 'months':
          timeToElaps = 2 ** Math.trunc(monthsInDays / 3);
          return timeToElaps;
        default:
          return timeToElapse;
      }
    };

    return (
        <>
            <h2>Data To Estimate</h2>
            <table striped bordered hover>
            <tr className="blue-color">
                <th>Population</th>
                <th>Time To Elapse</th>
                <th>Reported Cases</th>
                <th>Total Hospital Beds</th>
                <th>Period Type</th>
            </tr>
            {Object.keys(covid_data).length > 0 ? (
                <tr key={1}>
                    <td>{covid_data.population}</td>
                    <td>{covid_data.timeToElapse}</td>
                    <td>{covid_data.reportedCases}</td>
                    <td>{covid_data.totalHospitalBeds}</td>
                    <td>{covid_data.periodType}</td>
                </tr>
            ) : (
                <tr>
                <td colSpan={3}>No users</td>
                </tr>
            )}
            </table>
            <ImpactEstimation
                normalizePeriod={normalizePeriod}
                impact_data={covid_data}
            />
            <SevereImpactEstimation
                normalizePeriod={normalizePeriod}
                severeImpact_data={covid_data}
            />
        </>
    );
}

export default EstimatedInfo;