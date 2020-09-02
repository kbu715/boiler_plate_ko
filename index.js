const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://tiger:1234@cluster0-cgecu.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("다시 시작이야 ㅠㅠ");
});

app.listen(port, () => console.log(`Example App listening on port ${port}!!!`));
