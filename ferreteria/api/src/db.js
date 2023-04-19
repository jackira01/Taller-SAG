const mongoose = require("mongoose");
require("dotenv").config();
const DB =
  "mongodb+srv://admin:admin@ferreteria.logo8tc.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);

mongoose
  .connect(DB)
  .then(() => console.log("Connected to mongoDB ATLAS"))
  .catch((error) => console.error(error));
