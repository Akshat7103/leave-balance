const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const leaveBalanceRoutes = require("./routes/leaveBalanceRoutes");
const leaveRequestRoutes = require("./routes/leaveRequestRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/leave-balance", leaveBalanceRoutes);
app.use("/api/leave-request", leaveRequestRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
