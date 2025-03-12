const mongoose = require("mongoose");

const leaveRequestSchema = new mongoose.Schema({
  employeeName: { type: String, required: true },
  leaveType: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  daysTaken: { type: Number, required: true },
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("LeaveRequest", leaveRequestSchema);
