require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const jwt = require("jsonwebtoken"); 

const JWT_SECRET = process.env.JWT_SECRET; 




const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ success: false, message: "Access Denied" });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid Token" });
  }
};
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB Connected successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};
connectDB();


const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  })
);


const Feedback = mongoose.model(
  "Feedback",
  new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  })
);


app.post("/signup", async (req, res) => {
  try {
    console.log("Signup Request Body:", req.body);  // Debugging log

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ success: true, message: "Signup Successful" });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ success: false, message: "Signup Failed" });
  }
});


app.post("/login", async (req, res) => {
  try {
    console.log("Login Request Body:", req.body);
    const { email, password } = req.body;
    if (!email || !password) {
      console.log("Missing email or password"); // Debug log
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found"); 
      return res.status(400).json({ success: false, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) 
      { console.log("Invalid password"); 
        return res.status(400).json({ success: false, message: "Invalid credentials" });
      }
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1m" });
    res.status(200).json({ success: true, message: "Login Successful",token, user: { id: user._id, email: user.email } });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


app.post("/feedback", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();

    res.status(201).json({ success: true, message: "Feedback submitted successfully!" });
  } catch (error) {
    console.error("Feedback Submission Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


app.get("/feedback", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json({ success: true, feedbacks });
  } catch (error) {
    console.error("Fetching Feedback Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.get("/protected-route", authenticateToken, (req, res) => {
  res.json({ success: true, message: "You have access!", user: req.user });
});

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

console.log(process.env.JWT_SECRET);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
