const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("BD is connected"))
  .catch((err) => console.log(err));
