const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const twilio = require("twilio");
const client = new twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

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
    const { amount, phone } = req.body;
    await client.messages.create({
      body: `₹${amount} has been debited from your account.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone, // User's phone number
    });

    res.status(200).json({ success: true, message: "SMS sent successfully!" });
  } catch (error) {
    console.error("Twilio SMS Error:", error);
    res.status(500).json({ success: false, message: "Failed to send SMS" });
  }
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`✅ Server is running at https://dictionary-app-2.onrender.com/`);
});
