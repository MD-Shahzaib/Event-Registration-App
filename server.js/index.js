const express = require("express");
const db = require("./config/db");
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect To MongoDB.
db.connection.once("open", () => { console.log('✔✔ connect to MongoDB ✔✔') }).on("error", (err) => { console.log('❌❌ Connection error ❌❌==>', err) });

// Main Routes.
app.use('/', require('./routes/index.js'));

// Starting Server.
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});