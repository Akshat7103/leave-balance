import React from "react";
import "./Leave.css";

const LeaveTable = ({ leaves }) => {
  return (
    <table className="leave-table">
      <thead>
        <tr>
          <th>Leave Type</th>
          <th>Total Leaves</th>
          <th>Used Leaves</th>
          <th>Remaining Leaves</th>
        </tr>
      </thead>
      <tbody>
        {leaves.map((leave, index) => (
          <tr key={index}>
            <td>{leave.type}</td>
            <td>{leave.total}</td>
            <td>{leave.used}</td>
            <td>{leave.total - leave.used}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeaveTable;
