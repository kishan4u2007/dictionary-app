const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config(); // For storing environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows frontend to access backend
app.use(bodyParser.json());

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Backend is running on Render!");
});

// ✅ Fake SMS Sending Route (Modify as needed)
app.post("/send-sms", async (req, res) => {
  try {
    const { amount } = req.body;
    console.log(`Sending SMS for amount: ₹${amount}`);

    // Simulating an SMS send response
    res.status(200).json({ success: true, message: `SMS sent for ₹${amount}` });
  } catch (error) {
    console.error("Error sending SMS:", error);
    res.status(500).json({ success: false, message: "Failed to send SMS" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
