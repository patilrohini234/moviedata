const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello");
});
const port = 5002;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
