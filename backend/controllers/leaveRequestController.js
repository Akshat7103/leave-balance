const LeaveRequest = require("../models/LeaveRequest");

const createLeaveRequest = async (req, res) => {
  const { employeeName, leaveType, fromDate, toDate, daysTaken } = req.body;
  console.log("Received leave request data:", req.body);
  try {
    const newLeaveRequest = new LeaveRequest({
      employeeName,
      leaveType,
      fromDate,
      toDate,
      daysTaken,
    });
    const savedLeaveRequest = await newLeaveRequest.save();
    console.log("Leave request saved:", savedLeaveRequest);
    res.status(201).json(savedLeaveRequest);
  } catch (error) {
    console.error("Error saving leave request:", error.message);
    res.status(500).json({ message: error.message });
  }
};

const getLeaveRequests = async (req, res) => {
  const { employeeName } = req.query;
  try {
    const leaveRequests = await LeaveRequest.find({ employeeName });
    res.json(leaveRequests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createLeaveRequest, getLeaveRequests };
