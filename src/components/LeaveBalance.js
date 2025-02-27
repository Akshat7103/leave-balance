import React, { useState } from "react";
import LeaveForm from "./LeaveForm.js";
import LeaveTable from "./LeaveTable.js";
import "./Leave.css";

const LeaveBalance = () => {
  const [leaves, setLeaves] = useState([
    { type: "Annual", total: 20, used: 5 },
    { type: "Sick", total: 10, used: 2 },
    { type: "Casual", total: 5, used: 1 },
  ]);

  const [user, setUser] = useState({
    name: "John Doe",
    employeeId: "EMP12345",
    department: "Human Resources",
  });

  return (
    <div className="leave-balance-container">
      <h1 className=" text-red-900 text-3xl mb-6 text-center">
        Leave Balance Portal
      </h1>

      <div className="user-info">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Employee ID:</strong> {user.employeeId}
        </p>
        <p>
          <strong>Department:</strong> {user.department}
        </p>
      </div>

      <LeaveTable leaves={leaves} />
      <LeaveForm leaves={leaves} setLeaves={setLeaves} />
    </div>
  );
};

export default LeaveBalance;
