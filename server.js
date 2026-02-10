const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connection");
const bookRoutes = require("./routes/bookRoutes");

// Note to self: load environment variables before anything else
dotenv.config();

// Note to self: connect to MongoDB on startup
connectDB();

const app = express();

// Note to self: middleware to parse JSON bodies
app.use(express.json());

// Note to self: mount all book routes under /api/books
app.use("/api/books", bookRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
