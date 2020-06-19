// ENTRY POINT TO THE BACKEND
const express = require("express");

// Database
const connectDB = require("./config/db");

// Path
const path = require("path");

// Intialize express into the variable app
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set Static Folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html"))
  );
}

// PORT Variable
const PORT = process.env.PORT || 5000;

// App Method
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
