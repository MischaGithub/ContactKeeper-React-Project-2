// ENTRY POINT TO THE BACKEND
const express = require("express");

// Database
const connectDB = require("./config/db");

// Intialize express into the variable app
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Route
app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the Conatct Keeper API..." })
);

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// PORT Variable
const PORT = process.env.PORT || 5000;

// App Method
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
