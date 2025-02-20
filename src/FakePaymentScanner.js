import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from "axios";

export default function FakePaymentScanner() {
  const [data, setData] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [amount, setAmount] = useState(500);
  const [showSms, setShowSms] = useState(false);

  useEffect(() => {
    if (!scanned) {
      const scanner = new Html5QrcodeScanner(
        "qr-reader",
        { fps: 10, qrbox: { width: 250, height: 250 } },
        false
      );

      scanner.render(
        (decodedText) => {
          setData(decodedText);
          setScanned(true);
          setTimeout(() => {
            setShowSms(true);
            sendSmsNotification();
          }, 2000);
          scanner.clear();
        },
        (error) => console.warn(error)
      );

      return () => scanner.clear();
    }
  }, [scanned]);

  const sendSmsNotification = async () => {
    try {
      await axios.post("https://dictionary-app-2.onrender.com/send-sms", { amount: amount }); // ✅ Updated backend URL
    } catch (error) {
      console.error("Error sending SMS:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-gray-900">
      {!scanned ? (
        <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-96 border border-gray-300">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2c/PhonePe_Logo.png"
            alt="PhonePe Logo"
            width="200"
            className="w-24 mx-auto mb-4"
          />
          <h1 className="text-lg font-semibold text-purple-600">Scan & Pay</h1>
          <p className="text-gray-500 text-sm">Scan the QR code to make a payment</p>
          <div className="border-4 border-dashed border-gray-400 p-4 rounded-lg mt-4 bg-gray-50">
            <div id="qr-reader"></div>
          </div>
          <div className="mt-4">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 border rounded-lg text-center text-lg font-semibold bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter Amount"
            />
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-96 border border-gray-300">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2c/PhonePe_Logo.png"
            alt="PhonePe Logo"
            width="200"
            className="w-24 mx-auto mb-4"
          />
          <h1 className="text-xl font-bold text-green-600">₹{amount}.00</h1>
          <p className="text-gray-500">Payment Successful</p>
          <p className="text-gray-500 text-sm">
            Transaction ID: {Math.floor(Math.random() * 100000000)}
          </p>
          <div className="mt-4 text-sm text-gray-400">Completed via UPI</div>
          <div className="mt-2 text-sm text-gray-500">SMS Confirmation Sent</div>
          <button
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg w-full font-semibold hover:bg-purple-700 transition"
            onClick={() => {
              setScanned(false);
              setShowSms(false);
            }}
          >
            Scan Again
          </button>
        </div>
      )}

      {showSms && (
        <div className="fixed bottom-4 left-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg w-80 animate-bounce">
          <h2 className="font-bold">New SMS</h2>
          <p>
            ₹{amount}.00 has been debited from your account via UPI.
            Transaction ID: {Math.floor(Math.random() * 100000000)}
          </p>
        </div>
      )}
    </div>
  );
}
