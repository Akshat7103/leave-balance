import React, { useState } from "react";
import "./Leave.css";

const LeaveForm = ({ leaves, setLeaves }) => {
  const [leaveType, setLeaveType] = useState("Annual");
  const [reason, setReason] = useState("");
  const [days, setDays] = useState("");

  const handleApplyLeave = (e) => {
    e.preventDefault();

    const updatedLeaves = leaves.map((leave) => {
      if (leave.type === leaveType && leave.total - leave.used >= days) {
        return { ...leave, used: leave.used + parseInt(days) };
      }
      return leave;
    });

    setLeaves(updatedLeaves);
    alert(`Leave applied successfully for ${days} day(s)`);
  };

  return (
    <form className="leave-form" onSubmit={handleApplyLeave}>
      <h2>Apply for Leave</h2>
      <label>Leave Type:</label>
      <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
        <option value="Annual">Annual Leave</option>
        <option value="Sick">Sick Leave</option>
        <option value="Casual">Casual Leave</option>
      </select>

      <label>Reason for Leave:</label>
      <textarea
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        required
      ></textarea>

      <label>Number of Days:</label>
      <input
        type="number"
        min="1"
        value={days}
        onChange={(e) => setDays(e.target.value)}
        required
      />

      <button type="submit">Apply Leave</button>
    </form>
  );
};

export default LeaveForm;
