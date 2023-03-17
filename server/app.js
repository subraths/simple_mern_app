const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const feedRoutes = require("./routes/feed");

app.use("/feed", feedRoutes);

mongoose
  .connect(
    "mongodb+srv://nodeServerUser:LAxodqZ5z9jXIVdf@basis-node-app.nbvvqsr.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => {
    app.listen(5000, () => console.log("Listening on port 5000"));
  })
  .catch((err) => console.log(err));
