import React from 'react';

const ChargingHistory = ({ chargingHistory }) => {
  return (
    <div className="charging-history">
      <h2>Charging History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Station</th>
            <th>Duration (minutes)</th>
          </tr>
        </thead>
        <tbody>
          {chargingHistory.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.station}</td>
              <td>{item.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChargingHistory;


