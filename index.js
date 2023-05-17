const express=require("express");
const dbConnect = require("./config/config");
const userRoutes = require("./routes/userRoutes");
const app = express();
var cors = require("cors");
require("dotenv");
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
  })
);
// Middleware
app.use(express.json());

app.use("/api/v1", userRoutes);

// CORS Configuration

dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});

app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});