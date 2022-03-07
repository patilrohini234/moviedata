const express = require("express");
const cors = require("cors");
const movie = require("./routes/movies");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/movie", movie);
const port = 5002;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
