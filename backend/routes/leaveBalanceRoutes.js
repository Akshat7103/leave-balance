const express = require("express");
const {
  getLeaveBalance,
  updateLeaveBalance,
} = require("../controllers/leaveBalanceController");

const router = express.Router();

router.get("/", getLeaveBalance);
router.put("/", updateLeaveBalance);

module.exports = router;
