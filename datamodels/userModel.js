const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    mobileNumber: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: /^[a-zA-Z0-9._-]+@sece\.ac\.in$/, // Assuming sece.ac.in domain
      unique: true,
    },
    department: {
      type: String,
      required: true,
    },
    rollNumber: {
      type: String,
      required: true,
    },
    batch: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "userdetails" }
); // Specify the collection name here

const User = mongoose.model("User", userSchema);

module.exports = User;
