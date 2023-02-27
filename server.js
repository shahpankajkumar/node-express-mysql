require('dotenv').config()
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: '*'
}));


// routes define
const usersRouter = require("./routes/users")
const categoriesRouter = require("./routes/categories")
const phoneRouter = require("./routes/phone")
const PORT = process.env.PORT;

// parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api routes 
app.use("/users/", usersRouter);
app.use("/categories/", categoriesRouter);
app.use("/phone/", phoneRouter);
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome back-end Application." });
});

// set port, listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});