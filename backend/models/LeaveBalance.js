const mongoose = require("mongoose");

const leaveBalanceSchema = new mongoose.Schema({
  employeeName: { type: String, required: true },
  year: { type: Number, required: true },
  month: { type: String, required: true },
  SickLeave: { type: Number, default: 3 },
  CasualLeave: { type: Number, default: 2 },
  PaidLeave: { type: Number, default: 5 },
  UnpaidLeave: { type: Number, default: 3 },
});

module.exports = mongoose.model("LeaveBalance", leaveBalanceSchema);
