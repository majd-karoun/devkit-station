const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const resourcesRouter = require('./routes/resources');
require("dotenv").config();

const corsOptions = {
  origin: 'https://devkitstation.netlify.com'
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());



//connect to DB
const uri = process.env.MONGODB_URI;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });



// Use the resources router for handling resource data
app.use('/resources', resourcesRouter);


// listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
