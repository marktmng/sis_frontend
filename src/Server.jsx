const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "https://sis-frontend-ten.vercel.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Enable pre-flight across-the-board

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://sis-frontend-ten.vercel.app"
  );
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json()); // Middleware to parse JSON bodies

// Your routes here

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
