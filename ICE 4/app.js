const express = require("express");
    const cors = require("cors");
    const helmet = require("helmet"); 
    const dotenv = require("dotenv");

    dotenv.config();

    const app = express();

    const authRoutes = require("./routes/authRoutes");

     app.use("/api/auth", authRoutes);

    app.use(helmet());
    app.use(cors());
    app.use(express.json());

    app.get("/", (req, res) => {
    	res.send("PulseVote API running!");
    });

    const cors = require('cors');
app.use(cors({
  origin: "https://localhost:5173",
  credentials: true
}));

const { protect } = require("./middleware/authMiddleware");

app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: `Welcome, user ${req.user.id}! You have accessed protected data.`,
    timestamp: new Date()
  });
});
    module.exports = app;