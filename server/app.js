const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config()
const cors = require("cors");
const userRouter = require('./routes/Users.js')



const { connectDb } = require('./helpers/connection.js')
connectDb();


app.use(cors());
app.use(express.json());
app.use("/", userRouter);

//PORT
app.listen(5000, () => console.log(`server is running on port 5000`));
