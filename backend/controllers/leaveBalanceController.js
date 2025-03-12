// const LeaveBalance = require("../models/LeaveBalance");

// const getLeaveBalance = async (req, res) => {
//   const { employeeName, year, month } = req.query;
//   console.log("Received leave balance update data:", req.body);
//   try {
//     const leaveBalance = await LeaveBalance.findOne({
//       employeeName,
//       year,
//       month,
//     });
//     res.json(leaveBalance);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const updateLeaveBalance = async (req, res) => {
//   const { employeeName, year, month, leaveType, days } = req.body;
//   try {
//     const leaveBalance = await LeaveBalance.findOneAndUpdate(
//       { employeeName, year, month },
//       { $inc: { [leaveType]: -days } },
//       { new: true }
//     );
//     res.json(leaveBalance);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { getLeaveBalance, updateLeaveBalance };
// const LeaveBalance = require("../models/LeaveBalance");

// const updateLeaveBalance = async (req, res) => {
//   const { employeeName, year, month, leaveType, days } = req.body;

//   console.log("Received leave balance update data:", req.body); // Log the received data

//   try {
//     const leaveBalance = await LeaveBalance.findOneAndUpdate(
//       { employeeName, year, month },
//       { $inc: { [leaveType]: -days } },
//       { new: true, upsert: true } // Add upsert: true to create a new document if it doesn't exist
//     );

//     console.log("Updated leave balance:", leaveBalance); // Log the updated data

//     res.json(leaveBalance);
//   } catch (error) {
//     console.error("Error updating leave balance:", error.message); // Log the error
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { updateLeaveBalance };
const LeaveBalance = require("../models/LeaveBalance");

const getLeaveBalance = async (req, res) => {
  const { employeeName, year, month } = req.query;

  try {
    const leaveBalance = await LeaveBalance.findOne({
      employeeName,
      year,
      month,
    });

    if (!leaveBalance) {
      return res.status(404).json({ message: "Leave balance not found" });
    }

    res.json(leaveBalance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLeaveBalance = async (req, res) => {
  const { employeeName, year, month, leaveType, days } = req.body;

  try {
    const leaveBalance = await LeaveBalance.findOneAndUpdate(
      { employeeName, year, month },
      { $inc: { [leaveType]: -days } },
      { new: true, upsert: true }
    );

    res.json(leaveBalance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getLeaveBalance, updateLeaveBalance };
