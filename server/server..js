const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// ✅ Fake SMS API (Modify as needed)
app.post("/send-sms", async (req, res) => {
  try {
    const { amount } = req.body;
    console.log(`Sending SMS for amount: ₹${amount}`);

    // Simulating SMS response
    res.status(200).json({ success: true, message: `SMS sent for ₹${amount}` });
  } catch (error) {
    console.error("Error sending SMS:", error);
    res.status(500).json({ success: false, message: "Failed to send SMS" });
  }
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
