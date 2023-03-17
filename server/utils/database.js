const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

MongoClient.connect(
  "mongodb+srv://nodeServerUser:LAxodqZ5z9jXIVdf@basis-node-app.nbvvqsr.mongodb.net/?retryWrites=true&w=majority"
)
  .then((res = console.log("connected")))
  .catch((err) => console.log(err));
