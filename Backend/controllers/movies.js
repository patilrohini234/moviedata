const data = require("../data.json");
exports.getmovies = (req, res) => {
  res.status(200).send({ data: data });
};

exports.getmovie = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const movie = data.find((d) => d.id == id);
  console.log(movie);
  if (movie) {
    return res.status(200).send(movie);
  }
  res.status(200).send({ msg: "Data not found" });
};

exports.addmovie = (req, res) => {
  const { name, rating } = req.body;
  const id = data[data.length - 1].id + 1;
  data.push({ id, name, rating });
  res.status(200).send({ data: data });
};
