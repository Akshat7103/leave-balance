const express = require("express");
const {
  createLeaveRequest,
  getLeaveRequests,
} = require("../controllers/leaveRequestController");

const router = express.Router();

router.post("/", createLeaveRequest);
router.get("/", getLeaveRequests);

module.exports = router;
