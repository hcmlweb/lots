require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");
const lotRoutes = require("./routes/lot.routes");

const MONGO_URI=process.env.MONGO_URI



app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));

// Routes

app.use("/api/lots", lotRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
